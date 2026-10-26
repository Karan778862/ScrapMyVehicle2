const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz4K5TKzqA85IqSAeIssbf8YoYfCb5vlh7Fk8d5AdPVkrCco_or-qkJYM4082H0bCJl/exec';

/**
 * Submits lead data to Google Apps Script (Google Sheets & Gmail notification).
 * Ensures all payload fields are clean primitives so Google Apps Script's
 * SpreadsheetApp.appendRow and MailApp.sendEmail do not throw runtime exceptions.
 */
export async function submitLead(payload) {
  try {
    const formattedEstimate = typeof payload.Estimate === 'object' && payload.Estimate !== null
      ? (payload.Estimate.formattedRange || `${payload.Estimate.min || ''} - ${payload.Estimate.max || ''}`)
      : (payload.Estimate || '');

    const brand = payload.Brand || '';
    const model = payload.Model || '';
    const year = payload.Year || '';
    const vehicleType = payload.VehicleType || '';

    // Generate descriptive Message if not explicitly passed
    let message = payload.Message || '';
    if (!message && (brand || formattedEstimate)) {
      message = `Vehicle: ${vehicleType ? vehicleType + ' - ' : ''}${brand} ${model} (${year}) | Valuation: ${formattedEstimate}`;
    }

    // Ensure fallback Name if not passed
    let name = payload.Name || '';
    if (!name) {
      name = brand ? `${brand} ${model} Owner` : 'Website Customer';
    }

    const cleanPayload = {
      FormType: String(payload.FormType || 'Instant Quote'),
      Name: String(name),
      Email: String(payload.Email || ''),
      Phone: String(payload.Phone || ''),
      Message: String(message),
      VehicleType: String(vehicleType),
      Brand: String(brand),
      Model: String(model),
      Year: String(year),
      Estimate: String(formattedEstimate)
    };

    // Use keepalive: true so the request is never cancelled if the user navigates to another page
    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      keepalive: true,
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(cleanPayload)
    });

    return { success: true };
  } catch (error) {
    console.error('Lead submission error:', error);
    return { success: false, error };
  }
}
