import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { membersRegistryService } from '../lib/appwriteService';
import Papa from 'papaparse';

const AdminImportMembers = () => {
  const { user } = useAuth();
  const [file, setFile] = useState(null);
  const [parsedData, setParsedData] = useState([]);
  const [preview, setPreview] = useState([]);
  const [importing, setImporting] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  // Check if user is admin
  if (!user?.isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Access Denied</h2>
          <p>You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  const normalizePhone = (phone) => {
    if (!phone) return '';
    
    // Remove all non-digits
    let cleaned = phone.toString().replace(/\D/g, '');
    
    // If starts with 880, keep as is
    if (cleaned.startsWith('880')) {
      return '+' + cleaned;
    }
    
    // If starts with 0, replace with +880
    if (cleaned.startsWith('0')) {
      return '+880' + cleaned.substring(1);
    }
    
    // If 10 digits, add +880
    if (cleaned.length === 10) {
      return '+880' + cleaned;
    }
    
    return phone;
  };

  const parseCSV = (csvFile) => {
    Papa.parse(csvFile, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const members = results.data.map((row, index) => {
          // Map CSV columns to our schema
          const member = {
            name: row['Name'] || row['Member_Name'] || '',
            email: (row['Mail'] || row['Email Adress'] || '').toLowerCase().trim(),
            phone: normalizePhone(row['Contact'] || row['Mobile No.'] || ''),
            batch: row['Batch'] || row['Batch No. (Ex: D-78)'] || '',
            roll: row['Roll'] || row['Roll No.'] || '',
            department: row['Department'] || '',
            guardianPhone: normalizePhone(row['Gurdian Number'] || ''),
            memberId: row['Member ID'] || row['Member_ID'] || row['Registration'] || '',
            interested: row['Interested'] ? row['Interested'].split(',').map(s => s.trim()).filter(Boolean) : [],
            expert: row['Expert'] ? row['Expert'].split(',').map(s => s.trim()).filter(Boolean) : [],
            joiningYear: row['CPC joining year?'] ? parseInt(row['CPC joining year?']) : null,
            participated: row['Have you participated in any contests hosted by cpc yet?'] === 'Yes',
            paymentStatus: row['Payment Status (Recieved?)'] || '',
            rowIndex: index + 2 // +2 for header row and 1-indexed
          };

          // Validation
          member.isValid = !!(member.name && member.email && member.email.includes('@'));
          member.validationError = member.isValid ? '' : 'Missing name or invalid email';

          return member;
        });

        setParsedData(members);
        setPreview(members.slice(0, 10)); // Show first 10 rows
        setError('');
      },
      error: (err) => {
        setError('Failed to parse CSV: ' + err.message);
      }
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    if (!selectedFile.name.endsWith('.csv')) {
      setError('Please select a CSV file');
      return;
    }

    setFile(selectedFile);
    setResult(null);
    parseCSV(selectedFile);
  };

  const handleImport = async () => {
    if (!parsedData.length) {
      setError('No data to import');
      return;
    }

    try {
      setImporting(true);
      setError('');
      setResult(null);

      // Filter out invalid rows
      const validMembers = parsedData.filter(m => m.isValid);
      
      if (validMembers.length === 0) {
        setError('No valid members found in the CSV');
        return;
      }

      // Import members
      const importResult = await membersRegistryService.importMembers(validMembers);
      
      setResult({
        ...importResult,
        totalRows: parsedData.length,
        validRows: validMembers.length,
        invalidRows: parsedData.length - validMembers.length
      });

      // Clear file input
      setFile(null);
      setParsedData([]);
      setPreview([]);
    } catch (err) {
      console.error('Import error:', err);
      setError('Import failed: ' + err.message);
    } finally {
      setImporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Import Members</h1>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-100 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {result && (
          <div className="bg-green-500/20 border border-green-500 text-green-100 px-6 py-4 rounded mb-6">
            <h3 className="text-xl font-bold mb-2">Import Complete!</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p><strong>Total Rows:</strong> {result.totalRows}</p>
                <p><strong>Valid Rows:</strong> {result.validRows}</p>
                <p><strong>Invalid Rows:</strong> {result.invalidRows}</p>
              </div>
              <div>
                <p><strong>Inserted:</strong> {result.inserted}</p>
                <p><strong>Updated:</strong> {result.updated}</p>
                <p><strong>Skipped:</strong> {result.skipped}</p>
              </div>
            </div>
            {result.errors.length > 0 && (
              <div className="mt-4">
                <p className="font-semibold mb-2">Errors:</p>
                <ul className="list-disc list-inside text-sm max-h-40 overflow-y-auto">
                  {result.errors.map((err, idx) => (
                    <li key={idx}>{err}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl">
          {/* Instructions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
            <div className="bg-blue-500/20 border border-blue-500 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Upload a CSV file containing member information</li>
                <li>Required columns: <code className="bg-white/10 px-2 py-1 rounded">Name</code>, <code className="bg-white/10 px-2 py-1 rounded">Mail</code> or <code className="bg-white/10 px-2 py-1 rounded">Email Adress</code></li>
                <li>Optional columns: Batch, Roll, Contact, Department, Guardian Number, Member ID, etc.</li>
                <li>Existing members will be updated; new members will be inserted</li>
                <li>Invalid rows (missing name/email) will be skipped</li>
              </ul>
            </div>
          </div>

          {/* File Upload */}
          <div className="mb-8">
            <label className="block text-lg font-semibold mb-4">Select CSV File</label>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-300
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-600 file:text-white
                hover:file:bg-blue-700
                file:cursor-pointer cursor-pointer"
            />
            {file && (
              <p className="mt-2 text-sm text-gray-300">
                Selected: <strong>{file.name}</strong> ({(file.size / 1024).toFixed(2)} KB)
              </p>
            )}
          </div>

          {/* Preview */}
          {preview.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Preview (First 10 rows)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="px-4 py-2">Row</th>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Email</th>
                      <th className="px-4 py-2">Phone</th>
                      <th className="px-4 py-2">Batch</th>
                      <th className="px-4 py-2">Valid</th>
                    </tr>
                  </thead>
                  <tbody>
                    {preview.map((member, idx) => (
                      <tr key={idx} className={`border-b border-white/10 ${!member.isValid ? 'bg-red-500/20' : ''}`}>
                        <td className="px-4 py-2">{member.rowIndex}</td>
                        <td className="px-4 py-2">{member.name || <span className="text-red-400">Missing</span>}</td>
                        <td className="px-4 py-2">{member.email || <span className="text-red-400">Missing</span>}</td>
                        <td className="px-4 py-2">{member.phone || '-'}</td>
                        <td className="px-4 py-2">{member.batch || '-'}</td>
                        <td className="px-4 py-2">
                          {member.isValid ? (
                            <span className="text-green-400">✓</span>
                          ) : (
                            <span className="text-red-400" title={member.validationError}>✗</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-300">
                Total: {parsedData.length} rows | Valid: {parsedData.filter(m => m.isValid).length} | Invalid: {parsedData.filter(m => !m.isValid).length}
              </p>
            </div>
          )}

          {/* Import Button */}
          {parsedData.length > 0 && (
            <div className="flex justify-end gap-4">
              <button
                onClick={() => {
                  setFile(null);
                  setParsedData([]);
                  setPreview([]);
                  setResult(null);
                  setError('');
                }}
                className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition"
              >
                Clear
              </button>
              <button
                onClick={handleImport}
                disabled={importing || parsedData.filter(m => m.isValid).length === 0}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {importing ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Importing...
                  </span>
                ) : (
                  `Import ${parsedData.filter(m => m.isValid).length} Members`
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminImportMembers;
