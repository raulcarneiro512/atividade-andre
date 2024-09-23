import React, { useState } from 'react';

const CheckboxComponent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Marcar
      </label>
      <p style={styles.text}>{isChecked ? 'Estou marcado' : 'Não estou marcado'}</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  label: {
    marginBottom: '10px',
  },
  text: {
    textAlign: 'center',
  },
};

export default CheckboxComponent;