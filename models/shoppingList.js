import { pool } from "../db/index.js";
// import { createTable } from "../db/scripts/createTable.js"
// import { dropTable } from "../db/scripts/deleteTable.js"

export async function getShoppingList() {
  const data = await pool.query("SELECT * FROM shopping;");
  console.log("The shopping list is", data.rows);
  return data.rows;
}

export async function postListItem(listItem) {
  const { item, completed } = listItem;
  const data = await pool.query(
    `INSERT INTO shopping (
      item,
      completed
    ) VALUES ($1,$2) RETURNING *;`,
    [item, completed]
  );
  return data.rows[0];
}

export async function deleteItem() {
  // const response = await pool.query('DELETE FROM shopping WHERE id=$1 RETURNING *;', [id])
//  dropTable()
//  createTable()
  // return response.rows
  const data = await pool.query("TRUNCATE TABLE shopping;");
  
}
