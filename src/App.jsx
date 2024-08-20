import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined,UserOutlined } from '@ant-design/icons';
import MenuList from './component/MenuList';
import Logo from './component/Logo';
import ToggleThemeButton from './component/ToggleThemeButton';
 // El componente para agregar empleado
// Importa los componentes de página
import Dashboard from './component/modules/Dashboard'; // Asegúrate de que Dashboard esté definido y exportado
import Roles from './component/modules/Roles';
import Usuarios from './component/modules/usuarios';
import Produccion from './component/modules/produccion';
import OrdenProduccion from './component/modules/OrdenProduccion';
import ProductoInsumo from './component/modules/ProductoInsumo';
import Insumo from './component/modules/Insumo';
import Empleados from './component/modules/Empleados/Empleados';
import Proveedores from './component/modules/Proveedores';
import Clientes from './component/modules/Clientes';
import Reservas from './component/modules/Reservas';
import Servicios from './component/modules/Servicios';
import ManoDeObra from './component/modules/ManoDeObra';

const { Header, Sider, Content } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Router>
      <Layout>
      <Sider
        theme={darkTheme ? 'dark' : 'light'}
        style={{
          backgroundColor: darkTheme ? '#4a0000' : '#fff',  // Vinotinto si darkTheme es true
        }}
        className="sidebar"
        collapsible
        trigger={null}
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
        <Layout>
        <Header style={{ padding: 0 }} className='header'>
          <div className="d-flex justify-content-between align-items-center" style={{ height: '100%' }}>
            <Button
              className='buttonInt'
              type='text'
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
            <h1 style={{ margin: 0 }}>Food in Production</h1>
            <Button 
              className='buttonStatus justify-content-end'
              type='text'
              icon={<UserOutlined />}
              style={{ marginLeft: 'auto' }} // Alinea el botón a la derecha
            >
              Lina Marcela: Admin
            </Button>
          </div>
        </Header>
          <Content style={{ padding: '24px', minHeight: 'calc(100vh - 64px)' }}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/roles" element={<Roles />} />
              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/produccion" element={<Produccion />} />
              <Route path="/orden_produccion" element={<OrdenProduccion />} />
              <Route path="/producto_insumo" element={<ProductoInsumo />} />
              <Route path="/insumo" element={<Insumo />} />
              <Route path="/empleados" element={<Empleados />} />
              <Route path="/proveedores" element={<Proveedores />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/reservas" element={<Reservas />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/mano_de_obra" element={<ManoDeObra />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
    
  );
}

export default App;
