import apiFetch from "./api-fetch.js";
export function getTransactios(idCategory) {
  return apiFetch(`/categories/${idCategory}/transactions`);
}
export function createTransaction(
  idCategory,
  newTransaction = { amount, notes, date }
) {
  return apiFetch(`/categories/${idCategory}/transactions`, {
    body: newTransaction,
  });
}
export function deleteTransaction(idCategory, idTransaction) {
  return apiFetch(`/categories/${idCategory}/transactions${idTransaction}`, {
    method: "DELETE",
  });
}
