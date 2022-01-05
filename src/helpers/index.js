//Formatear cantidad de dinero

export const formatearCantidad = ( cantidad ) =>{
    return cantidad.toLocaleString('en-US',{
        style: 'currency',
        currency: 'USD',

    })
}


export const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
}


export const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones);
}


export const generarFecha = () => {

    const year = new Date().getFullYear();
    const date = new Date().getDate();
    const day = new Date().getDay();
    const month = new Date().getMonth();
    
    const dia = {
        0: 'domingo', 
        1: 'lunes', 
        2: 'martes', 
        3: 'miércoles', 
        4: 'jueves', 
        5: 'viernes', 
        6: 'sàbado',         
    }
   
    const mes = {
        0: 'enero',
        1: 'febrero',
        2: 'marzo',
        3: 'abril',
        4: 'mayo',
        5: 'junio',
        6: 'julio',
        7: 'agosto',
        8: 'septiembre',
        9: 'octubre',
        10: 'noviembre',
        11: 'diciembre',
    }
    // console.log(year);
    // console.log(dia[`${day}`]);
    // console.log(mes[`${month}`]);
    // console.log(`Día ${date}`);
   
    const fechaDeHoy = `${dia[day]}, ${date} de ${mes[month]} de ${year}`;
    // console.log(fechaDeHoy.toLocaleUpperCase());


    return fechaDeHoy;
}

