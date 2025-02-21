export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    contacts: [] // Agregamos el array de contactos
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'load_contacts': {
      return {
        ...store,
        contacts: action.payload, // Guardamos los contactos en el estado
      };
    }

    default:
      throw Error('Unknown action.');
  }
}

// Función para obtener la lista de contactos desde una API.
export const fetchContacts = async (dispatch) => {
  try {
    // Se realiza la solicitud HTTP para obtener los contactos.
    const response = await fetch('https://playground.4geeks.com/contact/agendas/ceciliap/contacts');

    // Si la respuesta no es correcta (código de error 404 o cualquier otro error).
    if (!response.ok) {
      throw new Error('Error al obtener los contactos');
    }

    // Si el estado de la respuesta es 404, significa que no se encontró la agenda de contactos.
    if (response.status == 404) {
      await createAgendaUser()  // Si la agenda no existe, se crea un usuario de agenda.
      return
    }

    // Si la respuesta es correcta, se convierte en formato JSON.
    const data = await response.json();

    // Se despacha la acción 'load_contacts' para cargar los contactos en el estado.
    dispatch({ type: 'load_contacts', payload: data.contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);  // En caso de error, se muestra en consola.
  }
};

// Función para crear un usuario de agenda si no existe.
export const createAgendaUser = async () => {
  try {
    // Realiza una solicitud HTTP para crear un usuario de agenda.
    const response = await fetch('https://playground.4geeks.com/contact/agendas/ceciliap', {
      method: 'POST',  // El método es POST para crear un nuevo recurso (usuario de agenda).
      headers: { 'Content-Type': 'application/json' },  // Los datos se envían en formato JSON.
    });

    // Si la respuesta no es exitosa, lanza un error.
    if (!response.ok) {
      throw new Error('Error al crear el usuario de la agenda');
    }
  } catch (error) {
    console.error("Error al crear la agenda:", error);  // En caso de error, se muestra en consola.
  }
};

// Función para crear un nuevo contacto en la agenda.
export const createContact = async (dispatch, contactData) => {
  try {
    // Realiza una solicitud HTTP para crear un nuevo contacto en la agenda.
    const response = await fetch('https://playground.4geeks.com/contact/agendas/ceciliap/contacts', {
      method: 'POST',  // El método es POST para crear un nuevo recurso (contacto).
      headers: { 'Content-Type': 'application/json' },  // Los datos se envían en formato JSON.
      body: JSON.stringify(contactData),  // Los datos del contacto se convierten en JSON y se envían en el cuerpo de la solicitud.
    });

    // Si la respuesta no es exitosa, lanza un error.
    if (!response.ok) {
      throw new Error('Error al crear el contacto');
    }

    // Si el contacto se crea correctamente, se recargan los contactos.
    fetchContacts(dispatch);

  } catch (error) {
    console.error("Error al crear el contacto:", error);  // En caso de error, se muestra en consola.
  }
};

// Función para eliminar un contacto de la agenda.
export const deleteContact = async (dispatch, contactId) => {
  try {
    // Realiza una solicitud HTTP para eliminar el contacto especificado por su ID.
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/ceciliap/contacts/${contactId}`, {
      method: 'DELETE',  // El método es DELETE para eliminar el recurso (contacto).
      headers: { 'Content-Type': 'application/json' },  // Indicamos que los datos enviados están en formato JSON.
    });

    // Si la respuesta no es exitosa, lanza un error.
    if (!response.ok) {
      throw new Error('Error al eliminar el contacto');
    }

    // Si el contacto se elimina correctamente, se recargan los contactos.
    fetchContacts(dispatch);

  } catch (error) {
    console.error("Error al eliminar el contacto:", error);  // En caso de error, se muestra en consola.
  }
};