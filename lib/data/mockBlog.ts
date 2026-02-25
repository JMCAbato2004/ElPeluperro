/**
 * Mock data for blog posts
 * Used when Sanity CMS doesn't have data yet
 */

import type { SanityImage } from '../sanity/types';

const mockImage: SanityImage = {
  _type: 'image',
  asset: {
    _ref: 'image-placeholder',
    _type: 'reference',
  },
};

const bathImage: SanityImage = {
  _type: 'image',
  asset: {
    _ref: '/images/perro-ducha.png',
    _type: 'reference',
  },
};

export const mockCategories = [
  {
    _id: 'cat-1',
    title: 'Higiene',
    slug: { current: 'higiene' },
    description: 'Consejos sobre higiene y cuidado del pelaje de tu perro',
  },
  {
    _id: 'cat-2',
    title: 'Alimentación',
    slug: { current: 'alimentacion' },
    description: 'Guías sobre nutrición y alimentación canina',
  },
  {
    _id: 'cat-3',
    title: 'Salud',
    slug: { current: 'salud' },
    description: 'Información sobre salud y bienestar de tu mascota',
  },
  {
    _id: 'cat-4',
    title: 'Comportamiento',
    slug: { current: 'comportamiento' },
    description: 'Consejos sobre comportamiento y adiestramiento',
  },
];

export const mockBlogPosts = [
  {
    _id: 'post-1',
    title: 'Cómo bañar a tu perro en casa: Guía completa',
    slug: { current: 'como-banar-perro-en-casa' },
    excerpt:
      'Aprende los pasos esenciales para bañar a tu perro correctamente en casa, desde la preparación hasta el secado final.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Bañar a tu perro en casa puede ser una experiencia gratificante tanto para ti como para tu mascota. Sin embargo, es importante hacerlo correctamente para evitar problemas de piel y mantener a tu perro cómodo durante el proceso. Muchos dueños cometen errores comunes que pueden causar estrés al animal o dañar su pelaje y piel. Esta guía completa te ayudará a convertir el baño en una experiencia positiva y efectiva. El baño regular no solo mantiene a tu perro limpio y con buen olor, sino que también es una oportunidad para revisar su piel en busca de problemas, fortalecer vuestro vínculo y acostumbrar a tu mascota a ser manipulada, lo cual facilitará futuras visitas al veterinario o peluquero canino.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Frecuencia del baño según el tipo de perro: La frecuencia ideal del baño varía según múltiples factores. Los perros de pelo corto y liso generalmente necesitan baños cada 2-3 meses, mientras que los de pelo largo o denso pueden requerir baños mensuales. Las razas con piel grasa como los Basset Hound pueden necesitar baños más frecuentes, cada 3-4 semanas. Los perros con piel sensible o problemas dermatológicos deben bañarse según las indicaciones del veterinario, a menudo con champús medicados específicos. El estilo de vida también influye: un perro que pasa mucho tiempo al aire libre necesitará baños más frecuentes que uno que vive principalmente en interiores. Sin embargo, bañar a tu perro con demasiada frecuencia puede eliminar los aceites naturales de su piel, causando sequedad, irritación y problemas dermatológicos. Si tu perro se ensucia entre baños, considera usar toallitas húmedas específicas para perros o champú seco como alternativa temporal.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Preparación antes del baño: La preparación adecuada es clave para un baño exitoso. Antes de comenzar, asegúrate de tener todos los materiales necesarios al alcance de la mano: champú específico para perros (nunca uses champú humano, ya que el pH de nuestra piel es diferente y puede causar irritación), acondicionador si tu perro tiene pelo largo, varias toallas absorbentes, un cepillo adecuado para el tipo de pelaje, algodón para proteger los oídos, y premios para reforzar positivamente la experiencia. Elige un lugar adecuado: la bañera, una ducha con mampara, o en exterior si hace buen tiempo. Si usas una bañera, coloca una alfombrilla antideslizante en el fondo para que tu perro se sienta seguro y no resbale. Ajusta la temperatura del agua antes de mojar a tu perro; debe estar tibia, similar a la temperatura corporal del perro (alrededor de 38°C). El agua demasiado caliente puede quemar su piel sensible, y el agua fría puede causarle estrés y hacer que asocie el baño con una experiencia desagradable. Cepilla bien a tu perro antes del baño para eliminar nudos, pelo muerto y suciedad superficial. Los nudos se aprietan cuando se mojan, haciéndolos mucho más difíciles de eliminar después. Este cepillado previo también ayuda a que el champú penetre mejor y se enjuague más fácilmente. Si encuentras nudos muy apretados, considera cortarlos cuidadosamente con tijeras de punta roma antes del baño.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Durante el baño - Técnica correcta: Comienza mojando completamente el pelaje de tu perro con agua tibia, empezando por las patas y avanzando gradualmente hacia el cuerpo, dejando la cabeza para el final. Usa una alcachofa de ducha o una jarra para controlar mejor el flujo de agua. Evita mojar directamente los ojos, oídos y nariz. Para proteger los oídos, puedes colocar suavemente bolitas de algodón en el canal auditivo externo (no las introduzcas profundamente). Asegúrate de que el agua penetre hasta la piel, especialmente en perros con pelaje denso o doble capa. Una vez que el pelaje esté completamente empapado, aplica el champú. Diluye el champú con un poco de agua antes de aplicarlo para facilitar su distribución uniforme. Comienza aplicando el champú en el lomo y masajea suavemente con movimientos circulares, creando espuma y trabajando desde el cuello hacia la cola. Presta especial atención a las zonas que acumulan más suciedad: patas, vientre, zona genital, axilas y debajo de la cola. Masajea con las yemas de los dedos, no con las uñas, para evitar irritar la piel. El masaje no solo limpia, sino que también estimula la circulación sanguínea y puede ser relajante para tu perro. Deja actuar el champú durante 5-10 minutos si es medicado, o según las instrucciones del producto. Para lavar la cabeza, usa una esponja húmeda con un poco de champú y limpia cuidadosamente alrededor de los ojos, orejas y hocico, evitando que entre jabón en estas zonas sensibles.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Enjuague exhaustivo: El enjuague es posiblemente la parte más importante del baño. Los residuos de champú pueden causar irritación cutánea, picazón, caspa y problemas dermatológicos. Enjuaga abundantemente con agua tibia hasta que no queden absolutamente ningún resto de jabón. El agua debe salir completamente clara. Esto puede llevar más tiempo del que esperas, especialmente en perros con pelaje denso. Pasa tus manos por el pelaje mientras enjuagas para asegurarte de que el agua penetra hasta la piel. Presta especial atención a las zonas donde el champú tiende a acumularse: axilas, entre las patas, debajo del cuello y en la zona del vientre. Si usas acondicionador (recomendado para perros de pelo largo o propensos a enredos), aplícalo después del enjuague, déjalo actuar según las instrucciones del producto (generalmente 2-5 minutos) y enjuaga nuevamente de forma exhaustiva. El acondicionador ayuda a desenredar el pelo, añade brillo, protege contra la rotura y facilita el cepillado posterior.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Secado adecuado: Una vez terminado el enjuague, permite que tu perro se sacuda dentro de la bañera o ducha para eliminar el exceso de agua (prepárate para mojarte). Luego, envuélvelo inmediatamente en una toalla absorbente para evitar que se enfríe. Presiona suavemente la toalla contra su pelaje para absorber el agua; evita frotar vigorosamente, ya que esto puede crear nudos y dañar el pelo. Usa varias toallas si es necesario, especialmente para perros grandes o de pelo largo. Presta especial atención al secado de las orejas, ya que la humedad puede provocar infecciones. Seca cuidadosamente el interior de las orejas con una toalla o gasa limpia, y retira las bolitas de algodón si las usaste. Si tu perro tolera el secador, úsalo a temperatura baja o media y mantenlo a una distancia de al menos 30 cm de la piel para evitar quemaduras. Mueve constantemente el secador para no concentrar el calor en un solo punto. Algunos perros tienen miedo al ruido del secador; en ese caso, acostúmbralo gradualmente empezando con sesiones cortas y recompensándolo con premios. Para perros con miedo extremo al secador, el secado con toalla es suficiente, aunque llevará más tiempo. Cepilla el pelaje mientras lo secas para evitar nudos y dar forma al pelo. Asegúrate de que tu perro esté completamente seco antes de dejarlo salir al exterior si hace frío, ya que un perro húmedo puede enfriarse rápidamente y enfermar.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Cuidados especiales según el tipo de pelaje: Los perros de pelo corto son los más fáciles de bañar y secar. Usa un champú suave y un cepillo de cerdas suaves o un guante de goma para masajear durante el baño. Los perros de pelo largo requieren más tiempo y paciencia. Es fundamental desenredar completamente antes del baño y usar acondicionador para facilitar el peinado posterior. Seca por secciones, cepillando cada área mientras la secas. Los perros con doble capa (como Huskies o Golden Retrievers) tienen una capa interna densa que retiene mucha agua. Necesitan un enjuague extra exhaustivo y un secado prolongado. Usa un cepillo rastrillo para ayudar a eliminar el agua de la capa interna. Los perros de pelo rizado o lanoso (como Caniches o Bichones) son propensos a enredarse. Usa productos desenredantes y cepilla constantemente durante el secado para evitar que se formen nudos. Las razas sin pelo o con muy poco pelo necesitan baños más frecuentes pero con champús muy suaves para no resecar su piel expuesta.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Consejos para perros que odian el baño: Si tu perro tiene miedo al baño, la paciencia y el refuerzo positivo son esenciales. Nunca fuerces a tu perro ni uses castigos, ya que esto solo aumentará su ansiedad. Comienza con sesiones de desensibilización: deja que explore la bañera vacía, recompénsalo por acercarse, luego por entrar, etc. Asocia la bañera con experiencias positivas dando premios y jugando cerca de ella. Introduce el agua gradualmente: primero solo moja sus patas, luego aumenta poco a poco. Usa premios de alto valor durante todo el proceso. Mantén una actitud calmada y positiva; los perros perciben nuestro estrés. Habla con voz suave y tranquilizadora. Considera usar un tapete antideslizante y juguetes flotantes para hacer el baño más divertido. Si tu perro tiene fobia extrema al agua, consulta con un etólogo o adiestrador profesional. En casos extremos, puede ser mejor acudir a una peluquería canina profesional donde tienen experiencia manejando perros difíciles y equipamiento especializado.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Errores comunes a evitar: No uses nunca productos de higiene humana, ya que tienen un pH inadecuado para los perros y pueden causar irritación, sequedad y problemas dermatológicos. No bañes a tu perro con demasiada frecuencia; esto elimina los aceites naturales protectores de su piel. No uses agua demasiado caliente o fría. No dejes que entre agua o jabón en los ojos, oídos o nariz. No enjuagues de forma insuficiente; los residuos de champú son una causa común de problemas de piel. No frotes el pelaje vigorosamente al secar, especialmente en perros de pelo largo. No uses el secador a temperatura alta o demasiado cerca de la piel. No bañes a un perro con nudos sin cepillar primero. No castigues a tu perro si se comporta mal durante el baño; esto solo empeorará su ansiedad. Después del baño, recompensa generosamente a tu perro con premios, caricias y juego para que asocie la experiencia con algo positivo. Con práctica, paciencia y la técnica correcta, el baño puede convertirse en una rutina agradable para ambos.',
          },
        ],
      },
    ],
    featuredImage: bathImage,
    publishedAt: '2024-01-15T10:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[0],
    tags: ['baño', 'higiene', 'cuidados básicos'],
  },
  {
    _id: 'post-2',
    title: 'La importancia del cepillado regular en perros',
    slug: { current: 'importancia-cepillado-regular' },
    excerpt:
      'Descubre por qué el cepillado regular es fundamental para la salud de tu perro y cómo hacerlo correctamente según el tipo de pelaje.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'El cepillado regular es una de las prácticas más importantes en el cuidado de tu perro. No solo mantiene su pelaje brillante y saludable, sino que también fortalece el vínculo entre tú y tu mascota. Muchos dueños subestiman la importancia del cepillado, considerándolo solo una cuestión estética, pero en realidad es fundamental para la salud física y emocional de tu perro. El cepillado regular previene problemas de piel, mejora la circulación sanguínea, permite detectar tempranamente parásitos o anomalías cutáneas, y reduce significativamente la cantidad de pelo suelto en casa. Además, el tiempo dedicado al cepillado es una oportunidad perfecta para reforzar el vínculo con tu mascota, ya que la mayoría de los perros disfrutan de la atención y el contacto físico que implica esta actividad.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Beneficios del cepillado para la salud: El cepillado regular ofrece múltiples beneficios para la salud de tu perro. Elimina el pelo muerto, la suciedad superficial y las células muertas de la piel, permitiendo que la piel respire adecuadamente. Previene la formación de nudos y enredos, que pueden ser dolorosos y causar tirones en la piel, además de crear zonas donde se acumula humedad y pueden desarrollarse infecciones por hongos o bacterias. Distribuye los aceites naturales de la piel por todo el pelaje, manteniéndolo brillante, suave y saludable. Estos aceites naturales actúan como una barrera protectora contra elementos externos. El cepillado estimula la circulación sanguínea en la piel, promoviendo un pelaje más sano y fuerte desde la raíz. Permite detectar problemas de piel tempranamente, como irritaciones, erupciones, bultos, heridas, parásitos (pulgas, garrapatas, ácaros) o zonas de alopecia, lo que facilita un tratamiento precoz. Reduce significativamente la cantidad de pelo suelto en casa, muebles y ropa, especialmente importante durante las épocas de muda. Ayuda a regular la temperatura corporal del perro al eliminar el pelo muerto que puede actuar como aislante no deseado en verano. Además, el acto de cepillar puede ser relajante y terapéutico tanto para el perro como para el dueño, reduciendo el estrés y la ansiedad en ambos.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Frecuencia según el tipo de pelaje: La frecuencia del cepillado varía considerablemente según el tipo de pelaje de tu perro. Los perros de pelo corto y liso (como Beagles, Dálmatas o Boxers) necesitan cepillado semanal con un cepillo de cerdas suaves o un guante de goma. Aunque su pelo es corto, también mudan y se benefician del cepillado regular. Los perros de pelo medio (como Pastores Alemanes, Labradores o Golden Retrievers) requieren cepillado 2-3 veces por semana con un cepillo de púas metálicas o un rastrillo para subcapa. Estos perros suelen tener doble capa y mudan abundantemente. Los perros de pelo largo (como Yorkshire Terriers, Malteses o Shih Tzus) requieren cepillado diario con un cepillo de púas largas y un peine metálico para evitar nudos. Su pelo crece continuamente y se enreda fácilmente. Los perros con doble capa densa (como Huskies, Samoyedos o Akitas) necesitan cepillado diario, especialmente durante las mudas estacionales (primavera y otoño), cuando pierden masivamente su subcapa. Usa rastrillos especiales para subcapa y cepillos de púas metálicas. Los perros de pelo rizado o lanoso (como Caniches, Bichones o Perros de Agua) requieren cepillado diario con cepillos especiales para pelo rizado y peines metálicos. Su pelo no muda pero crece continuamente y se enreda con facilidad. Durante la época de muda, que generalmente ocurre dos veces al año (primavera y otoño), aumenta la frecuencia del cepillado independientemente del tipo de pelaje. Algunos perros pueden necesitar cepillado diario durante estas semanas para controlar la cantidad de pelo suelto.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Herramientas de cepillado según el pelaje: Elegir las herramientas correctas es fundamental para un cepillado efectivo. El cepillo de cerdas naturales es ideal para perros de pelo corto y liso; las cerdas suaves masajean la piel y distribuyen los aceites naturales. El cepillo de púas metálicas es versátil y funciona bien para la mayoría de tipos de pelo medio y largo; las púas penetran en el pelaje y eliminan pelo muerto y nudos superficiales. El rastrillo para subcapa es esencial para razas con doble capa; sus dientes largos alcanzan la capa interna y eliminan el pelo muerto sin dañar la capa externa. El peine metálico es imprescindible para perros de pelo largo; permite detectar y eliminar nudos pequeños antes de que se conviertan en problemas mayores. El guante de goma o cepillo de goma es perfecto para perros de pelo muy corto y para masajear durante el baño; recoge pelo suelto mediante fricción. El cepillo slicker tiene púas finas y cortas en ángulo, ideal para perros de pelo rizado o lanoso; desenreda eficazmente pero debe usarse con cuidado para no irritar la piel. Las tijeras de entresacar son útiles para eliminar nudos muy apretados sin dejar zonas calvas. El cortanudos es una herramienta especializada con cuchillas protegidas para cortar nudos de forma segura. Invierte en herramientas de calidad; aunque son más caras inicialmente, duran más y son más efectivas y cómodas tanto para ti como para tu perro.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Técnica correcta de cepillado: La técnica adecuada es tan importante como la frecuencia. Comienza siempre con tu perro relajado; elige un momento tranquilo del día y un lugar cómodo. Empieza por acariciar a tu perro para que se relaje y asocie el cepillado con algo agradable. Cepilla siempre en la dirección del crecimiento del pelo, desde la cabeza hacia la cola y desde el lomo hacia abajo. Trabaja por secciones, especialmente en perros de pelo largo o denso. Comienza por el lomo, luego los costados, el pecho, el vientre, las patas y finalmente la cola. Presta especial atención a las zonas propensas a enredarse: detrás de las orejas, axilas, zona del collar, parte trasera de las patas y zona genital. Estas áreas tienen pelo más fino y están sujetas a más fricción. Usa movimientos suaves pero firmes; no presiones demasiado fuerte, especialmente con cepillos de púas metálicas, ya que puedes irritar o raspar la piel. Si encuentras un nudo, no tires bruscamente. Intenta deshacerlo suavemente con los dedos o con un peine, trabajando desde las puntas hacia la raíz. Si el nudo es muy apretado, usa un spray desenredante o un poco de acondicionador, y si no se deshace, córtalo cuidadosamente con tijeras de punta roma. Para perros con doble capa, usa primero el rastrillo para eliminar el pelo muerto de la subcapa, y luego el cepillo de púas para la capa externa. Habla con tu perro con voz suave y tranquilizadora durante todo el proceso. Haz pausas si tu perro se inquieta y recompénsalo con premios y caricias. El cepillado debe ser una experiencia positiva, no un castigo.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Cómo acostumbrar a un cachorro al cepillado: Es fundamental acostumbrar a los cachorros al cepillado desde temprana edad, incluso si su pelaje aún no lo requiere. Comienza con sesiones muy cortas (2-3 minutos) y aumenta gradualmente la duración a medida que el cachorro se acostumbra. Usa un cepillo suave y movimientos muy delicados. Asocia el cepillado con experiencias positivas: ofrece premios de alto valor antes, durante y después de cada sesión. Elige momentos en que el cachorro esté naturalmente calmado, como después de jugar o comer. Nunca fuerces al cachorro a quedarse quieto; si se resiste, haz una pausa y vuelve a intentarlo más tarde. Maneja sus patas, orejas y cola suavemente durante el cepillado para que se acostumbre a ser tocado en estas zonas sensibles. Esto facilitará futuros cuidados veterinarios y de peluquería. Sé paciente y consistente; algunos cachorros aceptan el cepillado inmediatamente, mientras que otros necesitan semanas de desensibilización gradual. Si tu cachorro muerde el cepillo, redirige su atención a un juguete apropiado. Con el tiempo y la práctica, el cepillado se convertirá en una rutina agradable que tu perro esperará con entusiasmo.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Problemas comunes y soluciones: Los nudos y enredos son el problema más común, especialmente en perros de pelo largo. Prevención: cepilla diariamente y usa acondicionador después del baño. Tratamiento: deshaz los nudos suavemente con los dedos o un peine, usando spray desenredante si es necesario. La piel sensible o irritada puede aparecer si cepillas con demasiada fuerza o usas herramientas inadecuadas. Solución: usa cepillos más suaves, reduce la presión y la frecuencia, y consulta al veterinario si la irritación persiste. El pelo estático es común en invierno o en ambientes secos. Solución: usa un spray antiestático para perros o un poco de acondicionador diluido en agua. El perro que se resiste al cepillado necesita desensibilización gradual con refuerzo positivo. Divide el cepillado en sesiones cortas, recompensa generosamente y nunca uses la fuerza. Si el problema persiste, consulta con un etólogo. La caspa excesiva puede indicar piel seca, alergias o problemas de salud. Aumenta la frecuencia del cepillado para estimular la producción de aceites naturales, asegúrate de que tu perro tiene una dieta equilibrada con ácidos grasos omega-3, y consulta al veterinario si la caspa persiste. Los parásitos como pulgas o garrapatas pueden detectarse durante el cepillado. Si encuentras parásitos, consulta inmediatamente con tu veterinario para un tratamiento adecuado.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Cepillado profesional vs. casero: Aunque el cepillado casero regular es esencial, muchos perros se benefician de visitas periódicas a un peluquero canino profesional. Los profesionales tienen experiencia, herramientas especializadas y técnicas para manejar pelajes difíciles o perros que no cooperan. Pueden realizar cortes de pelo, deslanados profundos y tratamientos especiales que son difíciles de hacer en casa. La frecuencia de las visitas profesionales depende de la raza y el tipo de pelaje: los perros de pelo corto pueden no necesitar nunca un peluquero, los de pelo medio pueden beneficiarse de una visita cada 3-4 meses, y los de pelo largo o rizado pueden necesitar visitas mensuales o bimensuales. Sin embargo, el cepillado profesional no sustituye el cepillado casero regular. El mantenimiento diario o semanal en casa es fundamental para mantener el pelaje en buenas condiciones entre visitas profesionales. Además, el cepillado casero ofrece beneficios emocionales y de vínculo que no se obtienen en la peluquería. Considera el cepillado como una inversión en la salud y felicidad de tu perro. Dedica tiempo de calidad a esta actividad, conviértela en un ritual agradable, y tanto tú como tu perro disfrutaréis de los múltiples beneficios que ofrece.',
          },
        ],
      },
    ],
    featuredImage: mockImage,
    publishedAt: '2024-01-10T09:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[0],
    tags: ['cepillado', 'pelaje', 'cuidados diarios'],
  },
  {
    _id: 'post-3',
    title: 'Alimentación saludable para perros: Guía básica',
    slug: { current: 'alimentacion-saludable-perros' },
    excerpt:
      'Una guía completa sobre cómo alimentar correctamente a tu perro, qué alimentos evitar y cómo establecer una rutina de alimentación.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'La alimentación es uno de los pilares fundamentales de la salud de tu perro. Una dieta equilibrada y adecuada a sus necesidades específicas garantiza una vida larga y saludable. Sin embargo, la nutrición canina es un tema complejo que va mucho más allá de simplemente llenar un cuenco con comida. Las necesidades nutricionales varían según la edad, tamaño, raza, nivel de actividad y estado de salud del perro. Una alimentación inadecuada puede causar obesidad, desnutrición, problemas digestivos, alergias, enfermedades crónicas y reducir significativamente la esperanza de vida de tu mascota. Esta guía te ayudará a comprender los fundamentos de la nutrición canina y a tomar decisiones informadas sobre la alimentación de tu perro.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Nutrientes esenciales para perros: Los perros necesitan una combinación equilibrada de varios nutrientes esenciales. Las proteínas de calidad son fundamentales para el desarrollo y mantenimiento muscular, la reparación de tejidos y el funcionamiento del sistema inmunológico. Las mejores fuentes son carne de pollo, pavo, cordero, pescado, huevos y vísceras. Los perros adultos necesitan al menos un 18% de proteína en su dieta, mientras que los cachorros requieren un 22% o más. Las grasas saludables proporcionan energía concentrada, ayudan a absorber vitaminas liposolubles (A, D, E, K) y mantienen la piel y el pelaje saludables. Los ácidos grasos omega-3 y omega-6 son especialmente importantes. Fuentes: aceite de pescado, aceite de linaza, grasa de pollo. Los perros adultos necesitan al menos un 5% de grasa, los cachorros un 8%. Los carbohidratos proporcionan energía y fibra para la salud digestiva. Aunque los perros no los necesitan en grandes cantidades, son una fuente de energía útil. Fuentes: arroz, avena, patata, boniato. Las vitaminas son esenciales para múltiples funciones corporales: vitamina A para la visión, vitamina D para huesos fuertes, vitamina E como antioxidante, vitaminas del grupo B para el metabolismo energético. Los minerales como calcio, fósforo, potasio, sodio y zinc son cruciales para huesos, dientes, función muscular y nerviosa. El agua es el nutriente más importante; los perros deben tener acceso constante a agua fresca y limpia.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Tipos de alimentación: Existen varios enfoques para alimentar a tu perro. El pienso seco (croquetas) es la opción más popular por su conveniencia, larga vida útil y precio accesible. Elige piensos de alta calidad con carne como primer ingrediente, evita subproductos indefinidos y colorantes artificiales. La comida húmeda (latas o sobres) es más palatable y contiene más humedad, ideal para perros con problemas dentales o que beben poco agua. Suele ser más cara y menos conveniente. La dieta BARF (Biologically Appropriate Raw Food) consiste en alimentos crudos: carne, huesos carnosos, vísceras, vegetales. Requiere investigación cuidadosa y supervisión veterinaria para asegurar equilibrio nutricional. Riesgos: contaminación bacteriana, desequilibrios nutricionales si no se formula correctamente. La comida casera cocinada permite control total sobre ingredientes pero requiere conocimiento nutricional para asegurar que sea completa y equilibrada. Consulta con un nutricionista veterinario para formular recetas adecuadas. Las dietas mixtas combinan diferentes tipos de alimentos. Muchos dueños mezclan pienso seco con comida húmeda o añaden ingredientes frescos al pienso. Independientemente del tipo elegido, asegúrate de que la dieta sea completa, equilibrada y apropiada para la etapa de vida de tu perro.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Necesidades según la etapa de vida: Los cachorros (hasta 12 meses en razas pequeñas, hasta 24 meses en razas gigantes) necesitan alimentos específicos para cachorros con mayor contenido de proteínas, grasas, calcio y fósforo para soportar su rápido crecimiento. Alimenta 3-4 veces al día hasta los 6 meses, luego 2-3 veces hasta el año. No sobrealimentes; el crecimiento demasiado rápido puede causar problemas articulares, especialmente en razas grandes. Los perros adultos (1-7 años en razas pequeñas y medianas, 1-5 años en razas grandes) necesitan una dieta de mantenimiento equilibrada. Alimenta 1-2 veces al día. Ajusta las cantidades según el nivel de actividad: perros muy activos o de trabajo necesitan más calorías. Los perros senior (más de 7 años en razas pequeñas, más de 5 años en razas grandes) necesitan alimentos con menos calorías pero más fibra, proteínas de alta calidad y suplementos para articulaciones como glucosamina y condroitina. Pueden necesitar comida más blanda si tienen problemas dentales. Las perras gestantes o lactantes necesitan alimentos para cachorros debido a sus mayores necesidades energéticas y nutricionales. Los perros con condiciones médicas (alergias, problemas renales, diabetes, etc.) requieren dietas veterinarias específicas. Consulta siempre con tu veterinario antes de cambiar la dieta de un perro con problemas de salud.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Alimentos prohibidos y tóxicos: Nunca des a tu perro chocolate, que contiene teobromina, tóxica para perros. El chocolate negro es más peligroso que el chocolate con leche. Síntomas: vómitos, diarrea, hiperactividad, temblores, convulsiones, muerte. Las uvas y pasas causan insuficiencia renal aguda. Incluso pequeñas cantidades pueden ser fatales. Síntomas: vómitos, letargo, pérdida de apetito. La cebolla y el ajo (en todas sus formas: crudos, cocidos, en polvo) dañan los glóbulos rojos causando anemia. Los síntomas pueden tardar días en aparecer. El aguacate contiene persina, tóxica para perros. Causa vómitos y diarrea. El alcohol es extremadamente peligroso; incluso pequeñas cantidades pueden causar intoxicación grave, coma o muerte. La cafeína (café, té, bebidas energéticas) causa hiperactividad, taquicardia, temblores, convulsiones. Los alimentos con xilitol (chicles sin azúcar, caramelos, mantequilla de maní) causan hipoglucemia severa e insuficiencia hepática. Los huesos cocidos se astillan y pueden causar obstrucciones o perforaciones intestinales. Solo da huesos crudos carnosos y bajo supervisión. Las nueces de macadamia causan debilidad, vómitos, temblores, hipertermia. La masa de levadura cruda fermenta en el estómago, causando hinchazón y producción de alcohol. Los alimentos muy salados o grasos pueden causar pancreatitis. Si sospechas que tu perro ha ingerido algo tóxico, contacta inmediatamente con tu veterinario o un centro de toxicología veterinaria.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Establecer una rutina de alimentación: La consistencia es clave para una buena digestión y comportamiento. Alimenta a tu perro a las mismas horas cada día. Esto regula su sistema digestivo y previene ansiedad relacionada con la comida. La mayoría de perros adultos se alimentan bien con 2 comidas al día (mañana y tarde/noche). Algunos dueños prefieren una sola comida, pero dos comidas ayudan a prevenir la hinchazón, especialmente en razas grandes. Mide las porciones según las recomendaciones del fabricante, ajustando según el peso, edad y nivel de actividad de tu perro. Usa un medidor para ser preciso. La obesidad canina es un problema creciente. Alimenta en un lugar tranquilo, sin distracciones ni competencia de otras mascotas. Deja el cuenco durante 15-20 minutos y luego retíralo, incluso si no ha terminado. Esto previene el picoteo constante y establece que tú controlas los recursos. No alimentes inmediatamente antes o después de ejercicio intenso, especialmente en razas grandes propensas a la torsión gástrica. Espera al menos 30 minutos antes y 1-2 horas después. Proporciona agua fresca constantemente, cambiándola al menos una vez al día. Lava los cuencos diariamente para prevenir crecimiento bacteriano.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Premios y snacks: Los premios son útiles para entrenamiento y refuerzo positivo, pero deben representar menos del 10% de la ingesta calórica diaria. Elige premios saludables: trozos de carne cocida, zanahorias, manzana (sin semillas), arándanos, premios comerciales bajos en calorías. Evita premios con muchos aditivos, colorantes o azúcares. Los premios dentales pueden ayudar a mantener los dientes limpios, pero no sustituyen el cepillado dental. Ten cuidado con las calorías; muchos premios son muy calóricos. Si das muchos premios durante el entrenamiento, reduce ligeramente la comida principal. Nunca uses comida humana como premio habitual; esto fomenta la mendicidad y puede causar problemas digestivos. Los huesos recreativos crudos (huesos grandes de res o cordero) pueden proporcionar entretenimiento y beneficios dentales, pero siempre bajo supervisión. Retira el hueso si se astilla o se vuelve lo suficientemente pequeño como para tragarlo entero.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Cambios de dieta y problemas comunes: Cualquier cambio de dieta debe hacerse gradualmente durante 7-10 días para evitar problemas digestivos. Mezcla cantidades crecientes del nuevo alimento con cantidades decrecientes del antiguo. Día 1-2: 25% nuevo, 75% antiguo. Día 3-4: 50% nuevo, 50% antiguo. Día 5-6: 75% nuevo, 25% antiguo. Día 7+: 100% nuevo. Si tu perro tiene diarrea o vómitos durante el cambio, ralentiza el proceso. La obesidad es el problema nutricional más común. Señales: no puedes sentir las costillas fácilmente, no hay cintura visible, abdomen colgante. Solución: reduce las porciones gradualmente, aumenta el ejercicio, elimina premios innecesarios, consulta al veterinario. Las alergias alimentarias causan picazón, problemas digestivos, infecciones de oído recurrentes. Los alérgenos más comunes son pollo, res, lácteos, trigo. Solución: dieta de eliminación bajo supervisión veterinaria. Los problemas digestivos recurrentes pueden indicar intolerancia alimentaria o enfermedad. Consulta al veterinario para diagnóstico. La falta de apetito puede indicar enfermedad, estrés o simplemente que no le gusta la comida. Si persiste más de 24 horas, consulta al veterinario. Recuerda: cada perro es único. Lo que funciona para uno puede no funcionar para otro. Observa a tu perro, ajusta según sea necesario y consulta regularmente con tu veterinario para asegurar que su dieta es óptima.',
          },
        ],
      },
    ],
    featuredImage: mockImage,
    publishedAt: '2024-01-05T11:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[1],
    tags: ['alimentación', 'nutrición', 'salud'],
  },
  {
    _id: 'post-4',
    title: 'Cómo prevenir parásitos en tu perro',
    slug: { current: 'prevenir-parasitos-perro' },
    excerpt:
      'Conoce los diferentes tipos de parásitos que pueden afectar a tu perro y las mejores estrategias de prevención.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Los parásitos son una amenaza constante para la salud de tu perro. La prevención es la mejor estrategia para mantener a tu mascota libre de estos molestos invasores.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Tipos de parásitos: Los más comunes son pulgas, garrapatas, ácaros, lombrices intestinales y gusanos del corazón. Cada uno requiere un enfoque de prevención específico.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Prevención efectiva: Usa productos antiparasitarios recomendados por tu veterinario, mantén limpio el entorno de tu perro, revisa regularmente su pelaje y piel, y realiza desparasitaciones periódicas.',
          },
        ],
      },
    ],
    featuredImage: mockImage,
    publishedAt: '2024-01-01T10:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[2],
    tags: ['parásitos', 'prevención', 'salud'],
  },
  {
    _id: 'post-5',
    title: 'Señales de estrés en perros y cómo ayudarles',
    slug: { current: 'senales-estres-perros' },
    excerpt:
      'Aprende a identificar las señales de estrés en tu perro y descubre técnicas efectivas para ayudarle a relajarse.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Los perros, al igual que los humanos, pueden experimentar estrés. Reconocer las señales temprano es crucial para ayudar a tu mascota a mantener su bienestar emocional.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Señales comunes de estrés: Jadeo excesivo, lamido de labios, bostezos frecuentes, orejas hacia atrás, cola entre las patas, temblores, y comportamiento destructivo.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Cómo ayudar: Crea un espacio seguro, mantén rutinas consistentes, proporciona ejercicio regular, usa técnicas de relajación como masajes suaves, y considera la ayuda de un profesional si el estrés persiste.',
          },
        ],
      },
    ],
    featuredImage: mockImage,
    publishedAt: '2023-12-28T09:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[3],
    tags: ['comportamiento', 'estrés', 'bienestar'],
  },
  {
    _id: 'post-6',
    title: 'Cuidados especiales para perros de pelo largo',
    slug: { current: 'cuidados-perros-pelo-largo' },
    excerpt:
      'Los perros de pelo largo requieren cuidados específicos. Descubre cómo mantener su pelaje saludable y sin enredos.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Los perros de pelo largo son hermosos, pero requieren un compromiso mayor en cuanto a cuidados. Con las técnicas adecuadas, mantener su pelaje en perfectas condiciones es más fácil de lo que parece.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Cepillado diario: Es fundamental para prevenir nudos y enredos. Usa un cepillo adecuado para pelo largo y trabaja por secciones, desde las puntas hacia la raíz.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Baños regulares: Los perros de pelo largo necesitan baños más frecuentes, generalmente cada 4-6 semanas. Usa productos específicos para pelo largo y acondiciona bien para facilitar el desenredado.',
          },
        ],
      },
    ],
    featuredImage: mockImage,
    publishedAt: '2023-12-20T10:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[0],
    tags: ['pelo largo', 'cepillado', 'cuidados especiales'],
  },
  {
    _id: 'post-7',
    title: 'Las mejores playas para perros en Andalucía',
    slug: { current: 'playas-perros-andalucia' },
    excerpt:
      'Descubre las playas más dog-friendly de Andalucía donde tu perro puede disfrutar del mar y la arena sin restricciones.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Andalucía cuenta con numerosas playas que permiten el acceso a perros, ofreciendo espacios donde tu mascota puede disfrutar del mar y la arena. Conocer estas playas te permitirá planificar unas vacaciones perfectas con tu compañero peludo. El litoral andaluz se extiende por más de 800 kilómetros, y cada vez son más los municipios que habilitan zonas específicas para que los perros puedan bañarse y jugar libremente. Esta guía te ayudará a descubrir los mejores destinos caninos de la región.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Playas destacadas en la Costa del Sol: La Playa de Arroyo Totalán en Málaga es una de las más populares, con servicios específicos para perros como duchas caninas, papeleras especiales y zonas de sombra. Esta playa de arena oscura y aguas tranquilas se encuentra en el distrito Este de Málaga y cuenta con fácil acceso y aparcamiento cercano. En Marbella, la Playa del Cable ofrece un espacio amplio y bien equipado de aproximadamente 400 metros de longitud, donde tu perro puede correr libremente. Está situada junto al faro de Marbella y dispone de servicios de socorrismo durante la temporada alta. La Playa de Piedra Paloma en Casares es perfecta para perros que disfrutan de aguas tranquilas y un entorno más natural y salvaje. Esta playa virgen de casi un kilómetro de longitud ofrece un paisaje espectacular con dunas y vegetación autóctona.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Playas de Málaga capital y alrededores: Además de Arroyo Totalán, en Málaga encontramos la Playa de la Misericordia, que cuenta con una zona habilitada para perros durante todo el año. Esta playa urbana ofrece todos los servicios necesarios y está muy bien comunicada con el centro de la ciudad. En Torremolinos, la Playa Canina de los Álamos es otra excelente opción, con instalaciones modernas y un ambiente muy familiar. Rincón de la Victoria también dispone de una playa canina bien señalizada y con acceso adaptado.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Costa de la Luz - Provincia de Huelva: En Huelva, la Playa de El Espigón en Huelva capital es ideal para perros activos, con una extensión de más de 1.000 metros de arena fina y dorada. Esta playa cuenta con pasarelas de madera que facilitan el acceso y está equipada con fuentes de agua potable. La Playa Canina de Isla Canela, en Ayamonte, es otra joya de la costa onubense, con aguas cristalinas y arena blanca. En Punta Umbría, la Playa del Portil permite el acceso a perros en temporada baja y ofrece un entorno natural privilegiado rodeado de pinares.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Costa de la Luz - Provincia de Cádiz: En Cádiz, la Playa de Camposoto en San Fernando permite el acceso canino en ciertas zonas durante todo el año. Esta extensa playa de más de 2 kilómetros ofrece aguas poco profundas ideales para perros que están aprendiendo a nadar. La Playa de Levante en El Puerto de Santa María también admite perros en una zona delimitada, con servicios de limpieza y papeleras específicas. En Tarifa, conocida como la capital del windsurf, la Playa de los Lances tiene zonas donde los perros son bienvenidos, especialmente fuera de temporada alta. Chipiona cuenta con la Playa Canina de Micaela, perfectamente equipada y con fácil acceso.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Costa de Almería: En Almería, la Playa de las Amoladeras ofrece un entorno natural único dentro del Parque Natural Cabo de Gata-Níjar. Esta playa virgen de arena fina y aguas cristalinas es perfecta para los amantes de la naturaleza que quieren disfrutar con sus perros de un paisaje casi salvaje. La Playa de El Playazo en Vera es otra opción excelente, con una zona específica para perros bien señalizada. En Roquetas de Mar, la Playa Serena dispone de un área canina con todos los servicios necesarios. Estas playas almerienses destacan por su clima excepcional, con más de 300 días de sol al año.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Costa de Granada: Aunque Granada tiene menos kilómetros de costa, también ofrece opciones para perros. La Playa de Poniente en Motril cuenta con una zona habilitada para mascotas, y Salobreña permite el acceso canino en ciertas playas fuera de temporada alta. Estas playas granadinas combinan el encanto de la Costa Tropical con la cercanía de la Sierra Nevada, ofreciendo un contraste paisajístico único.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Normativas y recomendaciones generales: Verifica siempre las normativas locales antes de visitar cualquier playa, ya que pueden cambiar según la temporada y el municipio. La mayoría de las playas caninas exigen que los perros estén al día con sus vacunas y lleven microchip identificativo. Lleva siempre bolsas para recoger los desechos de tu perro y deposítalas en las papeleras habilitadas. Es fundamental llevar agua fresca abundante para tu mascota, ya que el agua salada puede causarle problemas digestivos. Evita las horas de más calor (entre las 12:00 y las 17:00) para prevenir golpes de calor. Respeta las zonas delimitadas y mantén a tu perro bajo control en todo momento, usando correa si así lo indica la normativa local. Muchas playas exigen que los perros lleven bozal, especialmente si son de razas consideradas potencialmente peligrosas. Asegúrate de que tu perro sabe nadar antes de dejarlo entrar en el agua, y vigílalo constantemente mientras está en el mar. Después del baño, enjuaga a tu perro con agua dulce para eliminar la sal y la arena de su pelaje y piel.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Consejos para una visita exitosa: Planifica tu visita con antelación, consultando los horarios permitidos y las restricciones específicas de cada playa. Lleva una sombrilla o tienda de playa para proporcionar sombra a tu perro. Incluye en tu equipaje toallas específicas para secar a tu mascota, juguetes flotantes para que se divierta en el agua, y un botiquín básico con productos para limpiar heridas menores. Es recomendable visitar al veterinario antes de las vacaciones para asegurarte de que tu perro está en buenas condiciones de salud. Considera contratar un seguro de responsabilidad civil si tu perro no está cubierto. Respeta siempre a los demás usuarios de la playa y mantén la zona limpia. Si tu perro muestra signos de estrés o incomodidad, es mejor retirarse y buscar un lugar más tranquilo. Con estas recomendaciones, tanto tú como tu perro podréis disfrutar de unas vacaciones inolvidables en las maravillosas playas de Andalucía.',
          },
        ],
      },
    ],
    featuredImage: mockImage,
    publishedAt: '2024-01-20T10:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[2],
    tags: ['playas', 'andalucía', 'verano', 'viajes'],
  },
  {
    _id: 'post-8',
    title: 'Cuidados esenciales para tu perro en la playa',
    slug: { current: 'cuidados-perro-playa' },
    excerpt:
      'Aprende cómo proteger a tu perro de los riesgos de la playa y prevenir enfermedades para que disfrute del verano de forma segura.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Llevar a tu perro a la playa puede ser una experiencia maravillosa tanto para ti como para tu mascota, pero es importante tomar precauciones para evitar que se enferme. El sol, la sal del mar y la arena pueden presentar riesgos para la salud de tu perro si no se toman las medidas adecuadas. Muchos dueños desconocen los peligros potenciales que acechan en la playa, desde la deshidratación hasta las quemaduras en las almohadillas. Esta guía completa te ayudará a prepararte adecuadamente y a reconocer las señales de alerta para que tu perro disfrute del verano de forma segura y saludable.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Protección solar y prevención de golpes de calor: Los perros también pueden sufrir quemaduras solares, especialmente en zonas con poco pelo como la nariz, las orejas, el vientre y el contorno de los ojos. Las razas de pelo claro o corto son particularmente vulnerables. Aplica protector solar específico para perros (nunca uses protector solar humano, ya que puede ser tóxico si lo lamen) en estas áreas sensibles al menos 30 minutos antes de la exposición al sol. Reaplica cada dos horas o después de cada baño. Evita las horas de más calor, entre las 12:00 y las 17:00, cuando los rayos UV son más intensos y la arena está extremadamente caliente. Proporciona sombra constante mediante una sombrilla, tienda de playa o toldo. Los perros no regulan la temperatura corporal tan eficientemente como los humanos y pueden sufrir un golpe de calor rápidamente. Lleva abundante agua fresca (al menos 2 litros por perro) y ofrécela frecuentemente, cada 15-20 minutos, incluso si tu perro no parece tener sed. Considera llevar una piscina inflable pequeña donde tu perro pueda refrescarse. Moja regularmente su cabeza, cuello y pecho con agua fresca para ayudarle a mantener una temperatura corporal adecuada. Los perros braquicéfalos (como bulldogs, pugs o boxers) son especialmente susceptibles al calor debido a su anatomía facial y requieren vigilancia extra.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Peligros del agua salada y prevención de intoxicaciones: Aunque es tentador dejar que tu perro beba del mar mientras juega, el agua salada puede causar graves problemas de salud. La ingesta de agua salada provoca diarrea osmótica, vómitos intensos, deshidratación severa y, en casos extremos, puede llevar a un desequilibrio electrolítico peligroso conocido como hipernatremia. Los síntomas incluyen sed excesiva, letargo, convulsiones y, en casos graves, puede ser fatal. Lleva siempre agua dulce en cantidad suficiente y un recipiente portátil plegable o un bebedero de viaje. Ofrece agua fresca antes, durante y después de cada sesión de juego en el mar. Vigila constantemente a tu perro mientras está en el agua y evita que beba agua salada. Si notas que ha ingerido agua del mar, ofrécele inmediatamente agua dulce y vigila cualquier síntoma de malestar. Después de cada baño en el mar, enjuaga completamente a tu perro con agua dulce para eliminar la sal y la arena, que pueden irritar su piel, causar picazón intensa, dermatitis y problemas dermatológicos. La sal también puede resecar el pelaje y la piel, causando descamación y malestar. Presta especial atención a las zonas entre los dedos, las axilas y la zona genital, donde la sal y la arena tienden a acumularse. Si tu playa no dispone de duchas, lleva garrafas de agua dulce específicamente para enjuagar a tu perro.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Protección de las almohadillas y prevención de lesiones: Las almohadillas de las patas de tu perro son sensibles y pueden sufrir quemaduras graves en la arena caliente. La arena puede alcanzar temperaturas de hasta 60°C en días muy calurosos, suficiente para causar quemaduras de segundo grado en pocos segundos. Antes de permitir que tu perro camine sobre la arena, comprueba la temperatura colocando tu mano o pie descalzo sobre ella durante al menos 7 segundos. Si está demasiado caliente para ti, también lo está para tu perro. Camina por la orilla donde la arena está más fresca y húmeda, o espera a las horas más frescas del día (antes de las 10:00 o después de las 18:00). Considera usar botitas protectoras especiales para perros si la arena está muy caliente o si planeas caminar largas distancias. Estas botitas también protegen contra cortes de conchas, cristales rotos, medusas varadas y otros objetos peligrosos. Revisa cuidadosamente las almohadillas de tu perro después de cada visita a la playa para detectar cortes, abrasiones, irritaciones, grietas o cuerpos extraños incrustados como espinas de pez o fragmentos de concha. Limpia cualquier herida con agua dulce y aplica un antiséptico suave. Si detectas una lesión profunda, hinchazón o signos de infección, consulta inmediatamente con tu veterinario. Mantén las almohadillas hidratadas aplicando bálsamos específicos para almohadillas caninas, especialmente si tu perro no está acostumbrado a caminar sobre arena.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Riesgos adicionales en la playa: Además de los peligros ya mencionados, existen otros riesgos que debes conocer. Las medusas y sus tentáculos pueden causar picaduras dolorosas; si tu perro es picado, enjuaga la zona con agua salada (no dulce) y acude al veterinario. Los peces muertos y otros animales marinos en descomposición pueden causar intoxicaciones graves si tu perro los ingiere. Las algas también pueden ser tóxicas. Vigila constantemente lo que tu perro huele o intenta comer. Los anzuelos de pesca son extremadamente peligrosos y requieren atención veterinaria inmediata si son ingeridos o se clavan en la piel. La arena puede causar impactación intestinal si se ingiere en grandes cantidades, especialmente en perros que tienen el hábito de cavar o morder la arena. Las corrientes marinas y las olas grandes pueden ser peligrosas incluso para perros que saben nadar bien. Nunca dejes a tu perro nadar sin supervisión y considera usar un chaleco salvavidas canino, especialmente para perros mayores, cachorros o razas con dificultades para nadar.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Higiene post-playa y cuidados posteriores: Al llegar a casa después de un día de playa, es fundamental realizar una limpieza completa de tu perro. Baña a tu perro con agua dulce tibia y un champú suave específico para perros para eliminar completamente la sal, la arena y cualquier residuo. Presta especial atención a las zonas difíciles de alcanzar como las orejas, entre los dedos, las axilas y la zona genital. Seca bien todo su cuerpo, especialmente las orejas, para prevenir infecciones por hongos o bacterias. Las orejas húmedas son un caldo de cultivo perfecto para las infecciones, especialmente en razas con orejas caídas. Usa una toalla suave o un secador a temperatura baja y a distancia prudente. Revisa minuciosamente su pelaje en busca de parásitos como pulgas, garrapatas o ácaros, que pueden estar presentes en la arena o en zonas con vegetación cercanas a la playa. Examina también si hay restos de algas, pequeñas piedras o arena incrustada. Limpia sus ojos con suero fisiológico o una solución específica para ojos caninos si han estado expuestos al agua salada, ya que la sal puede causar irritación ocular. Revisa sus dientes y encías, y ofrécele agua fresca abundante. Observa su comportamiento durante las siguientes 24 horas para detectar cualquier signo de malestar. Es normal que tu perro esté cansado después de un día de playa, pero debe recuperar su energía normal tras un buen descanso.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Señales de alerta y cuándo acudir al veterinario: Es crucial conocer los síntomas que indican que tu perro necesita atención veterinaria urgente. Vigila síntomas como jadeo excesivo que no cesa incluso en la sombra, letargo extremo o incapacidad para levantarse, vómitos repetidos o diarrea severa, encías pálidas o de color rojo intenso, desorientación o pérdida de coordinación, temblores o convulsiones, temperatura corporal superior a 40°C, negativa a beber agua o incapacidad para mantenerla en el estómago. Estos síntomas pueden indicar golpe de calor, intoxicación por agua salada, deshidratación severa o envenenamiento. El golpe de calor es una emergencia veterinaria que puede ser fatal en cuestión de minutos. Si observas alguno de estos signos, actúa inmediatamente: traslada a tu perro a un lugar fresco y sombreado, ofrece pequeñas cantidades de agua fresca (no fría), moja su cuerpo con agua tibia (no helada, ya que el cambio brusco de temperatura puede ser contraproducente), coloca toallas húmedas en su cuello, axilas y zona inguinal, y contacta urgentemente con tu veterinario o acude a la clínica veterinaria más cercana. No esperes a ver si los síntomas mejoran por sí solos. La prevención es siempre la mejor estrategia: planifica las visitas a la playa en horarios frescos, lleva todo el equipo necesario, mantén a tu perro hidratado y fresco, y vigílalo constantemente. Con estas precauciones, tu perro podrá disfrutar de la playa de forma segura y crear maravillosos recuerdos veraniegos contigo.',
          },
        ],
      },
    ],
    featuredImage: mockImage,
    publishedAt: '2024-01-22T09:00:00Z',
    author: 'José Antonio Camacho',
    category: mockCategories[2],
    tags: ['playa', 'salud', 'verano', 'prevención', 'cuidados'],
  },
];
