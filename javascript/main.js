// class Productos {
//     constructor(id, nombre, precio, descripcion, imagen) {
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = precio;
//         this.descripcion = descripcion;
//         this.imagen = imagen;
//     }
// }

// const sabarin = new Productos(1, "Sabarin de 20 cm", 5000, "sabarin-20cm", "./images/producto2.jpg");
// const cupcacke = new Productos(2, "Molde para cupcacke x12", 8000, "molde-cupcackex12", "./images/producto1.jpg");
// const jarra = new Productos(3, "Jarra medidora", 5000, "jarra-medidora", "./images/producto3.jpg");
// const embudos = new Productos(4, "Embudos", 2000, "embudos", "./images/producto4.jpg");

// const productosArray = [sabarin, cupcacke, jarra, embudos];

fetchData();

async function fetchData() {
    try {
        const res = await fetch("./json/arrays.json");

        if (!res.ok) {
            throw new Error("Error en la respuesta de la red");
        }

        const data = await res.json();
        const arrayProductos = data.novedades

        const productosContenedor = document.querySelector(".productos-contenedor");

        arrayProductos.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = `
        <a href="#">
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.descripcion}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$${producto.precio}</p>
                </div>
            </div>
        </a>
    `;
            productosContenedor.appendChild(div);
        });
    } catch (error) {
        console.log(error);
    }
}
