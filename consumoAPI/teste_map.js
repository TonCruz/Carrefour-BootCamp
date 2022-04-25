function getAdmins(map) {
  let admins = [];
  for([key, value] of map) {
    if (value === 'User') {
      admins.push(key);
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Wellington', 'Admin');
usuarios.set('Stephany', 'User');
usuarios.set('Natalia', 'Admin');

console.log(getAdmins(usuarios));