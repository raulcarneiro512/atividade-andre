import React from 'react';

const Jogos = () => {
  const games = [
    {
      name: 'Valorant',
      platform: 'Pc (Windows)',
      year: 2020,
    },
    {
      name: 'The Legend of Zelda',
      platform: 'NES (Nintendo Entertainment System)',
      year: 1986,
    },
    {
      name: 'Detroit: Become Human',
      platform: 'PlayStation 4, Pc (Windows)',
      year: 2018,
    },
    {
      name: 'Cuphead',
      platform: 'PC, PlayStation 4,Xbox One, Nintendo Switch',
      year: 2017,
    },
  ];

  return (
    <table border={1} align="center">
      <thead>
        <tr>
          <th>Nome do Jogo</th>
          <th>Plataforma</th>
          <th>Ano de Lançamento</th>
        </tr>
      </thead>
      <tbody>
        {games.map((game, index) => (
          <tr key={index}>
            <td>{game.name}</td>
            <td>{game.platform}</td>
            <td>{game.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Jogos;
