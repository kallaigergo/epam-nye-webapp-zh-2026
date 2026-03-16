// DO NOT MODIFY THIS FILE!

const employees = [
    { id: 1, name: "Anikó", role: "Developer" },
    { id: 2, name: "Gergő", role: "Designer" },
    { id: 3, name: "Zoltán", role: "Developer" },
    { id: 4, name: "Eszter", role: "Manager" },
    { id: 5, name: "Dávid", role: "Developer" }
];

window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('employee-container');
    const template = document.getElementById('employee-template');

    employees.forEach(emp => {
        let htmlContent = template.innerHTML;
        htmlContent = htmlContent
            .replace(/{{employee-name}}/g, emp.name)
            .replace(/{{employee-role}}/g, emp.role);

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;

        container.appendChild(tempDiv.firstElementChild);
    });
});
