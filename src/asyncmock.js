const books = [
    {id:"1", name: "Lo que dicen tus ojos", author:"Florencia Bonelli", price: 30000, img: "../img/Lo que dicen tus ojos.webp", idCat: "novelas", synopsis:"Córdoba, 1961. Francesca de Gecco, una joven argentina de origen humilde, tiene una brillante carrera por delante en el periódico de su tío y mentor Alfredo Visconti. Pero Francesca ve truncado su sueño tras una gran desilusión amorosa. Destrozada, decide abandonar Córdoba para trabajar en la embajada de Ginebra, la primera parada de un largo y fascinante viaje que la llevará hasta el otro lado del mundo, a Arabia Saudita. Allí, entre lujosos palacios y extensos desiertos, vivirá una gran pasión, que le devolverá la felicidad, pero que también la colocará en el centro de la convulsionada situación política de Oriente Próximo. Sin saberlo, terminará por convertirse en el peón de un juego a muerte."},
    {id:"2" , name: "Origen", author:"Dan Brown", price: 35000, img: "../img/Origen.webp", idCat: "ciencia ficcion", synopsis: "Robert Langdon, profesor de simbología e iconografía religiosa de Harvard, acude al Museo Guggenheim Bilbao para asistir a un trascendental anuncio que «cambiará la faz de la ciencia para siempre». El anfitrión de la velada es Edmond Kirsch, un joven multimillonario cuyos visionarios inventos tecnológicos y audaces predicciones lo han convertido en una figura de renombre mundial. Brillante exalumno de Langdon, se dispone a revelar un extraordinario descubrimiento que dará respuesta a las dos preguntas que han obsesionado a la humanidad desde el principio de los tiempos. Al poco de comenzar la presentación, meticulosamente orquestada por Edmond Kirsch y la directora del museo, Ambra Vidal, estalla el caos para asombro de cientos de invitados y millones de espectadores en todo el mundo. Ante la inminente amenaza de que el valioso hallazgo se pierda, Langdon y Ambra, perseguidos por un atormentado enemigo, deben huir a Barcelona e iniciar una carrera contrarreloj para localizar la críptica contraseña que les dará acceso al revolucionario secreto de Kirsch. Siguiendo un rastro de pistas compuesto por símbolos ocultos en obras literarias y de arte moderno, tendrán pocas horas para intentar desvelar la fascinante investigación de Kirsch… y su sobrecogedora revelación sobre el origen y el destino de la humanidad"},
    {id:"3" , name: "La Bruja del Mar", author:"Sarah Henning", price: 10000, img: "../img/La Bruja del Mar.webp", idCat: "fantasia", synopsis: "Todo el mundo sabe lo que pasa al final. Una sirena, un príncipe, un beso de amor verdadero. Pero antes de la historia de esa joven sirena, existieron tres amigos: uno tímido, uno real y uno que ya estaba muerto. Desde que su mejor amiga, Anna, se ahogó, Evie ha sido marginada en su pequeño pueblo de pescadores. Una anormal. Una maldición. Una bruja. Una chica con un extraño parecido con Anna aparece en la costa y, aunque ella lo niega, Evie está convencida de que su mejor amiga sobrevivió y de que su propia magia no era tan eficaz después de todo. Cuando las chicas captan los ojos y los corazones de dos encantadores príncipes, Evie cree que por fin podría tener su “felices para siempre”. Pero la chica nueva tiene sus propios secretos. No puede quedarse en Havnestad, o mantenerse con dos piernas, a menos que Evie encuentre una manera de ayudarla. Ahora, Evie hará cualquier cosa para salvar la humanidad de su amiga y el corazón de su príncipe, aprovechando el poder de su magia, su océano y su amor, hasta que descubra, demasiado tarde, a lo que en realidad ha renunciado."},
    {id:"4" , name: "Fracasos Exitosos", author:"Bernardo Stamateas", price: 16000, img: "../img/Fracasos Exitosos.webp", idCat: "autoayuda", synopsis: "Fuimos creados para vivir y no para existir. Todos nuestros errores esconden la semilla de las grandes oportunidades. * Lo importante es aprender del error, olvidar los detalles y poder seguir adelante. * El fracaso es una situación, no una posición; no es un muro, es una puerta que te llevará a una nueva dimensión de triunfo. * Lo único que hará en tu vida el error será liberar tu potencial escondido. En este libro encontrarás principios que te ayudarán a transformar tus fracasos en éxitos. ¡No vemos en la cima!"},
    {id:"5" , name: "El Principito", author:"Antoine de Saint-Exupéry", price: 8000, img: "../img/El Principito.webp", idCat: "infantiles", synopsis: "El clásico de la literatura, no solo infantil, narra la historia del Principito, el cual a través de un lenguaje aparentemente sencillo y de vivencias propias, deja enseñanzas de vida que ayudarán a la comprensión y valoración, tanto de las cosas sencillas como de las complejas. En esta ocasión el libro cuenta con las ilustraciones del autor."}  
]

export const getBooks = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(books);
        }, 2000)
    })
}

export const getOneBook = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const searchBook = books.find(item => item.id === id)
            resolve(searchBook);
        }, 2000)
    })
}

export const getBooksByCategory = (idCategory) => {
    return new Promise(resolve => {
        setTimeout (() => {
            const booksCategory = books.filter(item => item.idCat === idCategory);
            resolve(booksCategory);
        }, 2000)

    })
}