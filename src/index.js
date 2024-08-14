function obtenerUsuarios() {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3000/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta de la red');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

// Llamar a la función para probarla
obtenerUsuarios()
    .then(usuarios => {
        console.log(usuarios);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    async function obtenerUsuarios() {
        try {
            const response = await fetch('http://localhost:3000/users');
            if (!response.ok) {
                throw new Error('Error en la respuesta de la red');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error; // Opcional: lanzar el error para que la función que llama pueda manejarlo
        }
    }
    
    // Llamar a la función para probarla
    obtenerUsuarios()
        .then(usuarios => {
            console.log(usuarios);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    


