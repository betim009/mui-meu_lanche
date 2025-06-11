export async function getAllUsers() {
  try {
    const url = "https://67b5223ba9acbdb38ed16600.mockapi.io/api/v1/users";
    const req = await fetch(url);
    const res = await req.json();
    return res;
  } catch (error) {
    return error
  }
}
