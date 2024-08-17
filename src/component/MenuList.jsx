import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { 
    HomeOutlined, 
    UserOutlined, 
    ProductOutlined, 
    CalendarOutlined, 
    BarChartOutlined,
    IdcardOutlined 
} from '@ant-design/icons';

const MenuList = ({ darkTheme }) => {
    return (
        <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className="menu-bar">
            <Menu.Item key="dashboard" icon={<HomeOutlined />}>
                <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="roles" icon={<IdcardOutlined />}>
                <Link to="/roles">Roles</Link>
            </Menu.Item>
            <Menu.Item key="usuarios" icon={<UserOutlined />}>
                <Link to="/usuarios">Usuarios</Link>
            </Menu.Item>
            <Menu.SubMenu 
                key="subtasks" 
                icon={<ProductOutlined />} 
                title="Produccion">
                <Menu.Item key="produccion">
                    <Link to="/produccion">Produccion</Link>
                </Menu.Item>
                <Menu.Item key="orden_produccion">
                    <Link to="/orden_produccion">Orden de Produccion</Link>
                </Menu.Item>
                <Menu.Item key="producto_insumo">
                    <Link to="/producto_insumo">Producto insumo</Link>
                </Menu.Item>
                <Menu.Item key="insumo">
                    <Link to="/insumo">Insumo</Link>
                </Menu.Item>
                <Menu.Item key="empleados">
                    <Link to="/empleados">Empleados</Link>
                </Menu.Item>
                <Menu.Item key="proveedores">
                    <Link to="/proveedores">Proveedores</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu 
                key="reservas" 
                icon={<CalendarOutlined />} 
                title="Reservas">
                <Menu.Item key="clientes">
                    <Link to="/clientes">Clientes</Link>
                </Menu.Item>
                <Menu.Item key="reservas">
                    <Link to="/reservas">Reservas</Link>
                </Menu.Item>
                <Menu.Item key="servicios">
                    <Link to="/servicios">Servicios</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="mano_de_obra" icon={<BarChartOutlined />}>
                <Link to="/mano_de_obra">Mano de obra</Link>
            </Menu.Item>
        </Menu>
    );
}

export default MenuList;
