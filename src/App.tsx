import Jogos from './componentes/Jogos';
import LoginForm from './componentes/LoginForm';
import CheckboxComponent from './componentes/CheckboxComponent';
import ImageComponent from './componentes/ImageComponent';

const App = () => {
  return (
    <div>
      <h1>Meus Componentes</h1>
      <Jogos />
      <LoginForm />
      <ImageComponent />
      <CheckboxComponent />
    </div>
  );
};

export default App;
