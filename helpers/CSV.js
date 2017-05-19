import Papa from 'papaparse';

export function parse(file, cb, cbErr) {
	Papa.parse(file, {
		header: true,
		dynamicTyping: true,
		skipEmptyLines: true,
		complete: cb,
		// worker: true,
		error: cbErr
	});
}
