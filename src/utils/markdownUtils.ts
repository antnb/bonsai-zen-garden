
/**
 * Shared utility for formatting markdown content to HTML
 */
export function formatMarkdown(markdown: string): string {
  let html = markdown;
  
  // Format headers
  html = html.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>');
  html = html.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-7 mb-3">$1</h2>');
  html = html.replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>');
  
  // Format lists
  html = html.replace(/^\d+\. (.*$)/gm, '<li class="ml-6 list-decimal mb-2">$1</li>');
  html = html.replace(/^- (.*$)/gm, '<li class="ml-6 list-disc mb-2">$1</li>');
  
  // Format paragraphs
  html = html.replace(/^(?!(#|<h|<li))(.*$)/gm, (match) => {
    if (match.trim() === '') return '<br>';
    return `<p class="mb-4">${match}</p>`;
  });
  
  // Format emphasis
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  // Wrap lists
  html = html.replace(/<li class="ml-6 list-disc mb-2">([\s\S]*?)(?=<(?!li)|$)/g, '<ul class="mb-6">$&</ul>');
  html = html.replace(/<li class="ml-6 list-decimal mb-2">([\s\S]*?)(?=<(?!li)|$)/g, '<ol class="mb-6">$&</ol>');
  
  // Format tables
  if (html.includes('|')) {
    const lines = html.split('\n');
    let tableContent = '';
    let isInTable = false;
    let tableHTML = '<div class="overflow-x-auto mb-8"><table class="min-w-full border-collapse border border-gray-300">';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('|') && line.endsWith('|')) {
        if (!isInTable) {
          isInTable = true;
          tableHTML += '<thead><tr>';
          
          // Header row
          const headerCells = line.split('|').filter(cell => cell.trim() !== '');
          headerCells.forEach(cell => {
            tableHTML += `<th class="border border-gray-300 px-4 py-2 bg-gray-100">${cell.trim()}</th>`;
          });
          
          tableHTML += '</tr></thead><tbody>';
          i++; // Skip separator row
        } else {
          tableHTML += '<tr>';
          const cells = line.split('|').filter(cell => cell.trim() !== '');
          cells.forEach(cell => {
            tableHTML += `<td class="border border-gray-300 px-4 py-2">${cell.trim()}</td>`;
          });
          tableHTML += '</tr>';
        }
      } else if (isInTable) {
        isInTable = false;
        tableHTML += '</tbody></table></div>';
        tableContent += tableHTML;
        tableHTML = '<div class="overflow-x-auto mb-8"><table class="min-w-full border-collapse border border-gray-300">';
      } else {
        tableContent += lines[i] + '\n';
      }
    }
    
    if (isInTable) {
      tableHTML += '</tbody></table></div>';
      tableContent += tableHTML;
    }
    
    if (tableContent) {
      html = tableContent;
    }
  }
  
  return html;
}
