
async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    const userList = document.getElementById('userList');

    users.forEach(user => {
      const li = document.createElement('li');
      li.innerHTML = `
        <p>${user.name}</p>
        <button onclick="showUserDetails(${user.id})">Ver Detalhes</button>
      `;
      userList.appendChild(li);
    });
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
}

async function showUserDetails(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();
    alert(`
      Nome: ${user.name}
      Email: ${user.email}
      Cidade: ${user.address.city}
    `);
  } catch (error) {
    console.error('Erro ao buscar detalhes do usuário:', error);
  }
}

window.onload = fetchUsers;