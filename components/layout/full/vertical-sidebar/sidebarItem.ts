import {
    ApertureIcon,
    CopyIcon,
    LayoutDashboardIcon, LoginIcon, MoodHappyIcon, TypographyIcon, UserPlusIcon
} from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    {
        title: 'Inicio',
        icon: LayoutDashboardIcon,
        to: '/'
    },
{ header: 'APODERADOS' },

    {
        title: 'TE ESCUCHAMOS!',
        icon: CopyIcon,
        to: '/ui/denuncias'
    },
    {
        title: 'Mis Casos',
        icon: CopyIcon,
        to: '/ui/casos'
    },
    {
        title: 'Documentos',
        icon: CopyIcon,
        to: '/ui/documentos'
    },
    {
        title: 'Encuestas',
        icon: CopyIcon,
        to: '/ui/encuestas'
    },
    {
        title: 'Diario Mural',
        icon: CopyIcon,
        to: '/ui/noticias'
    },
    { header: 'ALUMNOS' },
    {
        title: 'TE ESCUCHAMOS!',
        icon: CopyIcon,
        to: '/ui/denuncias'
    },
    {
        title: 'Mis Casos',
        icon: CopyIcon,
        to: '/ui/casos'
    },
    {
        title: 'Documentos',
        icon: CopyIcon,
        to: '/ui/documentos'
    },
    {
        title: 'Encuestas',
        icon: CopyIcon,
        to: '/ui/encuestas'
    },
    {
        title: 'Diario Mural',
        icon: CopyIcon,
        to: '/ui/noticias'
    },

    { header: 'DOCENTES' },
    {
        title: 'Ingresar Denuncia',
        icon: CopyIcon,
        to: '/ui/denuncias'
    },
    {
        title: 'Mis Casos',
        icon: CopyIcon,
        to: '/ui/casos'
    },
    {
        title: 'Documentos',
        icon: CopyIcon,
        to: '/ui/documentos'
    },
    {
        title: 'Encuestas',
        icon: CopyIcon,
        to: '/ui/encuestas'
    },
    {
        title: 'Diario Mural',
        icon: CopyIcon,
        to: '/ui/noticias'
    },
    {
        title: 'Letrero LED',
        icon: CopyIcon,
        to: '/ui/letrero'
    },
    { header: 'ENCARGADO CONVIVENCIA ESCOLAR' },

    {
        title: 'Gestión de Casos',
        icon: CopyIcon,
        to: '/ui/gestioncasos'
    },
    {
        title: 'Documentos',
        icon: CopyIcon,
        to: '/ui/documentos'
    },
    {
        title: 'Encuestas',
        icon: CopyIcon,
        to: '/ui/encuestas'
    },
    {
        title: 'Reuniones',
        icon: CopyIcon,
        to: '/ui/reuniones'
    },
    {
        title: 'Diario Mural',
        icon: CopyIcon,
        to: '/ui/noticias'
    },
    {
        title: 'Letrero LED',
        icon: CopyIcon,
        to: '/ui/letrero'
    },




    {
        title: 'Casos Recibidos',
        icon: CopyIcon,
        to: '/ui/casosrecibidos'
    },
    {
        title: 'Consultas',
        icon: CopyIcon,
        to: '/ui/consultas'
    },
    {
        title: 'Detalle Caso',
        icon: CopyIcon,
        to: '/ui/detallecaso'
    },
    
    
    
    
   
    
   
   
    {
        title: 'Login',
        icon: LoginIcon,
        to: '/auth/login'
    },
    {
        title: 'Register',
        icon: UserPlusIcon,
        to: '/auth/register'
    },
];

export default sidebarItem;