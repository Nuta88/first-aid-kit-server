import { TConstantlyStoredMedicine } from "../constantly_stored_medicine/types/constantly_stored_medicine";
import { Medicine } from "../medicine/entities/medicine.entity";

export const htmlTemplate = (content: any) => ( `
      <html>
        <head>
          <style>
            h3, h4 { display:inline }
            body {
              background-color: rgba(238,237,237,0.82);
              font-family: 'Arial', sans-serif;
            }
            table {
              width: 100%;
              margin-bottom: 15px;
            }
            th {
              padding: 18px 4px;
              background-color: #880808;
              color: #ffffff;
            }
            td {
              padding: 4px;
            }
            .container {
              width: 80%;
              height: 100vh;
              margin: 0 auto;
              box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
              background-color: #ffffff;
            }
            .header {
              background-color: #880808;
              color: #ffffff;
              padding: 15px;
              text-align: center;
            }
            .content {
              margin: 1px 18px;
              font-size: 1.2rem;
            }
            .button {
              background-color: #880808;
              color: #ffffff;
              padding: 10px 20px;
              text-decoration: none;
              border-radius: 5px;
            }
            .action {
              margin-top: 25px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>FIRST AID KIT</h1>
            </div>
            <div class="content">
            ${content}
            </div>
          </div>
        </body>
      </html>
    `);

export const expiredMedicinesTemplate = (expiredMedicines: Medicine[]) => {
  const content = `
      <div class="content">
        <p>Hello,</p>
        <p>You have expired medicines:</p>
        <table border="1">
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Expiration date</th>
            <th>Description</th>
          </tr>
          ${expiredMedicines.map(ex => `<tr>
            <td>${ex.name.toUpperCase()}</td>
            <td>${ex.categories.map(c => c.name)}</td>
            <td>${ex.amount}</td>
            <td>${ex.expiration_date}</td>
            <td>${ex.description}</td>
          </tr>`).join('')}
        </table>
        <p class="action">
          Click the button below to remove expired medicines:
          <a class="button" href="${process.env.APP_CLIENT_URL}/expired" target="_blank">First Aid Kit</a>
        </p>
        </div>`;
  
  return htmlTemplate(content);
};
export const missingMedicinesTemplate = (missingMedicines: TConstantlyStoredMedicine[]) => {
  const content = `
      <div class="content">
        <p>Hello,</p>
        <p>You need to buy medicines:</p>
        <table border="1">
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
          ${missingMedicines.map(ex => `<tr>
            <td>${ex.name.toUpperCase()}</td>
            <td>${ex.categories.map(c => c.name)}</td>
            <td>${ex.description}</td>
          </tr>`).join('')}
        </table>
        <p class="action">
          Click the button below to remove expired medicines:
          <a class="button" href="${process.env.APP_CLIENT_URL}/must-have" target="_blank">First Aid Kit</a>
        </p>
        </div>`;
  
  return htmlTemplate(content);
};
