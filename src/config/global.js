export const global = {
  componenteFormativo:
    'Restablecimiento y garantía de derechos de las niñas, niños y adolescentes.',
  descripcionCurso:
    'La ruta del Proceso Administrativo para el Restablecimiento de Derechos (PARD), facilita la toma de decisiones y  acciones frente a presuntas situaciones de amenaza o vulneración de los derechos de niñas, niños y adolescentes, con la finalidad de procurar el restablecimiento y la garantía de los mismos.',
  imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
}

export const menuPrincipal = {
  menu: [
    {
      nombreRuta: 'inicio',
      icono: 'fas fa-home',
      titulo: 'Volver al inicio',
    },
    {
      nombreRuta: 'introduccion',
      icono: 'fas fa-info',
      titulo: 'Introducción',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'tema1',
      icono: 'far fa-file-alt',
      numero: '1',
      titulo:
        'El restablecimiento y la garantía de derechos de niñas, niños y adolescentes',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo:
            '¿En qué consiste el restablecimiento de derechos de niñas, niños y adolescentes?',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-play-circle',
          numero: '1.2',
          titulo:
            '¿Qué es una inobservancia, amenaza y vulneración de derechos de niñas, niños y adolescentes?',
          hash: 't_1_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.3',
          titulo:
            '¿De quién es la obligación del restablecimiento de derechos?',
          hash: 't_1_3',
        },
      ],
    },
    {
      nombreRuta: 'tema2',
      icono: 'far fa-file-alt',
      numero: '2',
      titulo:
        'Rutas de restablecimiento de derechos de niñas, niños y adolescentes',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '2.1',
          titulo:
            'Ruta de reporte de atención a presuntas situaciones de inobservancia, amenaza y vulneración de derechos ante el ICBF',
          hash: 't_2_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2',
          titulo:
            'Autoridades administrativas competentes para el restablecimiento de derechos',
          hash: 't_2_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.3',
          titulo: 'Ruta de restablecimiento de derechos',
          hash: 't_2_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.4',
          titulo: 'Medidas de restablecimiento de derechos',
          hash: 't_2_4',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.5',
          titulo: 'Actividad didáctica',
          hash: 't_2_5',
        },
      ],
    },
  ],
  subMenu: [
    // {
    //   nombreRuta: 'actividad',
    //   icono: 'far fa-question-circle',
    //   titulo: 'Actividad didáctica',
    //   desarrolloContenidos: true,
    // },
    {
      nombreRuta: 'glosario',
      icono: 'fas fa-sort-alpha-down',
      titulo: 'Glosario',
    },
    //{
    //  nombreRuta: 'complementario',
    //  icono: 'far fa-folder-open',
    //  titulo: 'Material complementario',
    //},
    {
      icono: 'fas fa-book',
      titulo: 'Referencias bibliográficas',
      nombreRuta: 'referencias',
    },
    {
      icono: 'fas fa-download',
      titulo: 'Descargar material',
      download: 'downloads/material.zip',
    },
    {
      icono: 'far fa-registered',
      titulo: 'Créditos',
      nombreRuta: 'creditos',
    },
  ],
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor Metodológico y Pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Ana Francisca Uribe Cárdenas',
      cargo: 'Experta temática',
      centro: 'Equipo de Verificación. Programa Familias en Acción',
      regional: 'Dirección de Transferencias Monetarias Condicionadas.',
    },
    {
      nombre: 'Claudia Pureza Perdomo Gómez ',
      cargo: 'Experta temática',
      centro: 'GIT Territorios y Poblaciones',
      regional: 'Dirección de Transferencias Monetarias Condicionadas.',
    },
    {
      nombre: 'Jairo Fernando Contreras Gutiérrez',
      cargo: 'Experto temático',
      centro: 'Oficina Asesora de Planeación.',
    },
    {
      nombre: 'Martha Cecilia Arcila Aponte',
      cargo: 'Experta temática',
      centro: 'DTMC Grupo de Pilotaje y Escalamiento.',
    },
    {
      nombre: 'Omayra Hoyos Rojas',
      cargo: 'Experta temática',
      centro:
        'Equipo de Verificación. Programa Familias en Acción. Dirección de Transferencias Monetarias Condicionadas.',
    },
    {
      nombre: 'William Mogollón Marín',
      cargo: 'Experto temático',
      centro: 'CORPROGRESO',
    },
    {
      nombre: 'Liliana Victoria Morales Gualdrón',
      cargo: 'Diseñadora instruccional',
      centro: 'Centro de Gestión Industrial',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Dayra Maritza Paz Calderón',
      cargo: 'Diseñadora instruccional y evaluador Instruccional',
      centro: 'Centro para la Industria y la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Julia Isabel Roberto',
      cargo: 'Evaluadora Instruccional',
      centro: 'Centro para la comunicación de la Industria Gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'José Gabriel Ortiz Abella',
      cargo: 'Revisión metodológica y pedagógica',
      centro: 'Centro de Diseño y Metrología',
      regional: 'Regional Distrito Capital',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Soporte Organizacional',
    },
    {
      nombre: [
        'Jesus Antonio Vecino Valero',
        'José Jaime Luis Tang Pinzón',
        'Lady Adriana Ariza Luque',
        'Luis Zenen Arévalo Mantilla',
        'Nelson Iván Vera Briceño',
        'Oleg Litvin',
        'Wilson Andres Arenales Cáceres',
        'Zuleidy Maria Ruiz Torres',
      ],
      cargo: 'Diseño web y Producción Audiovisual',
    },
    {
      nombre: ['Daniel Ricardo Mutis Gómez', 'Ricardo Alfonso González Vargas'],
      cargo: 'Desarrollo Front-End',
    },
    {
      nombre: 'María Isabel Román Rueda',
      cargo: 'Revisora de contenidos',
    },
    {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional de Santander',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: 'Milady Tatiana Villamil Castellanos',
      cargo: ['Validación de recursos'],
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Congreso de la República de Colombia. (12 de julio de 2002). Ley 1564 de 2002. Por medio de la cual se expide el Código General del Proceso y se dictan otras disposiciones. Diario Oficial 48.489.',
    link:
      'http://www.secretariasenado.gov.co/senado/basedoc/ley_1564_2012.html',
  },
  {
    referencia:
      'Congreso de la República de Colombia. (8 de noviembre de 2006). Ley 1098 de 2006. Por la cual se expide el Código de la Infancia y la Adolescencia. Diario Oficial 46.446.',
    link: 'https://www.icbf.gov.co/cargues/avance/docs/ley_1098_2006.htm',
  },
  {
    referencia:
      'Congreso de la República de Colombia. (9 de enero de 2018). Ley 1878 de 2018. Por medio de la cual se modifican algunos Artículos de la Ley 1098 de 2006, por la cual se expide el Código de la Infancia y la Adolescencia, y se dictan otras disposiciones. Diario Oficial 50.471.',
    link: 'https://www.icbf.gov.co/ley-1878-de-2018',
  },
  {
    referencia: 'Constitución política de Colombia. [Const.] (1991). ',
    link: 'https://pdba.georgetown.edu/Constitutions/Colombia/colombia91.pdf',
  },
  {
    referencia: 'ICBF. (26 de octubre de 2009). Concepto 55896 de 2009.',
    link:
      'https://www.icbf.gov.co/cargues/avance/docs/concepto_icbf_0055896_2009.htm',
  },
  {
    referencia:
      'ICBF. (27 de diciembre de 2010). Resolución 5929 de 2010. Diario Oficial 47938.',
    link:
      'https://www.redjurista.com/Documents/resolucion_5929_de_2010_icbf_-_instituto_colombiano_de_bienestar_familiar.aspx#/',
  },
  {
    referencia: 'ICBF. (8 de enero de 2013). Concepto 6 de 2013.',
    link:
      'https://www.icbf.gov.co/cargues/avance/docs/concepto_icbf_0000006_2013.htm',
  },
  {
    referencia: 'ICBF. (4 de octubre de 2016). Concepto 123 de 2016.',
    link:
      'https://www.icbf.gov.co/cargues/avance/docs/concepto_icbf_0000123_2016.htm#:~:text=%22La%20Autoridad%20Administrativa%2C%20junto%20con,mantener%20la%20comunicaci%C3%B3n%20con%20ella.',
  },
  {
    referencia: 'ICBF. (24 de noviembre de 2016). Concepto 151 de 2016.',
    link:
      'https://www.icbf.gov.co/cargues/avance/docs/concepto_icbf_0000151_2016.htm',
  },
  {
    referencia:
      'ICBF. (2016a). Lineamiento técnico administrativo de ruta de actuaciones para el restablecimiento de derechos de niños, niñas y adolescentes con sus derechos inobservados, amenazados o vulnerados.',
    link:
      'https://www.icbf.gov.co/sites/default/files/procesos/lm3.p_lineamiento_tecnico_ruta_actuaciones_para_el_restablecimiento_de_derechos_nna_v1.pdf',
  },
  {
    referencia:
      'ICBF. (2016b). Lineamiento técnico para la atención de niños, niñas y adolescentes, con derechos inobservados, amenazados o vulnerados, en situación de trabajo infantil.',
    link:
      'https://www.icbf.gov.co/sites/default/files/procesos/lm4.p_lineamiento_tecnico_para_la_atencion_de_ninos_ninas_y_adolescentes_en_situacion_de_trabajo_infantil_v1.pdf',
  },
  {
    referencia:
      'ICBF. (2016c). Resolución 1519 de 2016. Por la cual se aprueba el lineamiento técnico del modelo para la atención de los niños, las niñas y adolescentes, con derechos inobservados, amenazados o vulnerados.',
    link:
      'https://juridia.jep.gov.co/normograma/compilacion/docs/resolucion_icbf_1519_2016.htm',
  },
  {
    referencia:
      'ICBF. (2017). Lineamiento técnico del modelo para la atención de los niños, las niñas y adolescentes, con derechos inobservados, amenazados o vulnerados.',
    link:
      'https://www.icbf.gov.co/sites/default/files/procesos/document_19.pdf',
  },
  {
    referencia:
      'ICBF. (2 de marzo de 2017). Resolución 1264 de 2017. Por la cual se adopta el Modelo de Enfoque Diferencial de Derechos del Instituto Colombiano de Bienestar Familiar.',
    link:
      'https://www.icbf.gov.co/cargues/avance/docs/resolucion_icbf_1264_2017.htm',
  },
  {
    referencia:
      'ICBF. (2018). Lineamiento técnico del modelo para la atención de los niños, las niñas y adolescentes, con derechos amenazados o vulnerados.',
    link:
      'https://www.icbf.gov.co/lineamiento-tecnico-del-modelo-para-la-atencion-de-los-ninos-ninas-y-adolescentes-con-derechos',
  },
  {
    referencia: 'ICBF. (2020). Banco de imágenes.',
    link: 'https://www.icbf.gov.co/',
  },
  {
    referencia: 'ICBF. (20 de enero de 2020). Concepto ICBF Nº 09.',
    link:
      'https://www.icbf.gov.co/sites/default/files/normatividad/9-_concepto_no-9-listo_para_web.pdf',
  },
  {
    referencia:
      'ICBF. (2021). Guía de gestión de peticiones, quejas, reclamos y sugerencias del instituto colombiano de bienestar familiar – ICBF. ',
    link:
      'https://www.icbf.gov.co/system/files/procesos/g1.rc_guia_de_gestion_de_peticiones_quejas_reclamos_y_sugerencias_del_icbf_v7.pdf',
  },
  {
    referencia:
      'López, P. (2016). Lineamiento para la atención integral a la primera infancia en perspectiva de respeto y reconocimiento de la diversidad, Comisión Intersectorial para la Primera Infancia.',
    link:
      'https://www.wikifplan.org/WIKIPLAN/1%201%2069%20-%20%20Linemiento%20Atenci%C3%B3n%20Integral%20diversidad%202016.pdf',
  },
  {
    referencia:
      'Ministerio de la Protección Social. (2010). Lineamientos técnico administrativo de ruta de actuaciones y modelo de atención para el restablecimiento de derechos de niños, niñas y adolescentes y mayores de 18 años con discapacidad, con sus derechos amenazados, inobservados o vulnerados.',
    link:
      'https://www.icbf.gov.co/sites/default/files/anexores5929rutaymodelodeatenciondefinitivo.pdf',
  },
  {
    referencia: 'Naciones Unidas. (24 de febrero de 2010). Asamblea General.',
    link:
      'https://www.acnur.org/fileadmin/Documentos/BDL/2010/8064.pdf?file=fileadmin/Documentos/BDL/2010/8064',
  },
  {
    referencia:
      'Presidencia de la República de Colombia. (17 de diciembre de 2007). Decreto 4840 de 2007. Por el cual se reglamentan los Artículos 52, 77, 79, 82, 83, 84, 86, 87, 96, 98, 99, 100, 105, 111 y 205 de la Ley 1098 de 2006. ',
    link:
      'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=74174',
  },
  {
    referencia:
      'Presidencia de la República de Colombia. (26 de mayo de 2015). Decreto 1069 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Justicia y del Derecho',
    link:
      'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=74174',
  },
  {
    referencia: 'Prosperidad Social. (2020). Banco de imágenes.',
    link: 'https://www.flickr.com/photos/prosperidadsocial/albums',
  },
  {
    referencia: 'Universidad Nacional de Colombia. (s.f.). Acción sin daño.',
    link: 'https://www.bivipas.unal.edu.co/handle/10720/4?locale=es',
  },
]

export const glosario = [
  {
    termino: 'Enfoque de derechos',
    significado:
      'el enfoque de derechos es un marco ético y jurídico para orientar los programas y políticas públicas y sociales en favor de la infancia, la niñez y adolescencia. Este enfoque asume al niño, niña o adolescente como centro del proceso de atención, lo reconoce como sujeto de derechos y actor social, y adicionalmente considera a las familias o redes vinculares de apoyo como los primeros encargados de su cuidado y protección, fortaleciéndolos para el cumplimiento de su rol. Igualmente, implementa procesos participativos y de empoderamiento y establece las condiciones para el ejercicio pleno de sus derechos, en función de la corresponsabilidad de la familia, el Estado y la sociedad.</br></br>El enfoque de derechos tiene como sustento la Convención sobre los Derechos del Niño(CDN) de las Naciones Unidas, la Constitución Política de Colombia y el Código de la Infancia y la Adolescencia, y es entendido como la garantía del goce efectivo de los derechos de los ciudadanos en ejercicio pleno de su ciudadanía(ICBF, 2016c).',
  },
  {
    termino: 'Enfoque diferencial',
    significado:
      'en el ICBF este enfoque se concibe como un método de análisis y actuación, que reconoce las inequidades, riesgos y vulnerabilidades y valora las capacidades y la diversidad de un determinado sujeto -individual o colectivo-para incidir en el diseño, implementación, seguimiento y evaluación de la política pública, con miras a garantizar el goce efectivo de derechos en especial el derecho a la igualdad y no discriminación. Se implementa a través de: acciones afirmativas, adecuación de la oferta institucional, desarrollo de oferta especializada.</br></br>Este enfoque centra su atención en colectivos históricamente discriminados por diferentes razones como la pertenencia étnica, el sexo, el género, la discapacidad, y la orientación sexual.La aplicación del enfoque diferencial pasa por identificar las problemáticas y particularidades que generan las discriminaciones y situaciones de amenaza o vulneración de los derechos de los niños, niñas, adolescentes o jóvenes, e implica asegurar que se adelanten acciones acordes a las características y necesidades específicas de las personas o grupos poblacionales, tendientes a garantizar el ejercicio efectivo de sus derechos(ICBF, 2018).',
  },
  {
    termino: 'Enfoque sistémico',
    significado:
      'el Instituto Colombiano de Bienestar Familiar (ICBF), considera válidos los diferentes enfoques de abordaje en la atención para los niños, niñas y adolescentes. Sin embargo, privilegia el enfoque sistémico el cual comprende al individuo en su contexto y expresa que la relación entre las personas y su entorno está sujeta a una dinámica circular de influencias recíprocas. El contexto más significativo es la familia, la cual se entiende como un sistema (ICBF, 2017).',
  },
]

export const complementario = [
  {
    texto:
      'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
    tipo: 'Video',
    link: 'https://www.google.com/',
  },
  {
    texto:
      'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
    tipo: 'Página web',
    descarga: '/downloads/prueba.pdf',
  },
  {
    texto:
      'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
    tipo: 'Artículo científico',
    link: 'https://www.google.com/',
  },
  {
    texto: 'Economía de Rosquilla. (s.f.).',
    tipo: 'Página web',
    descarga: '/downloads/prueba.pdf',
  },
  {
    texto: '2 minutos para entender el desarrollo sostenible – Spanish',
    tipo: 'Video',
    link: 'https://www.google.com/',
  },
]
