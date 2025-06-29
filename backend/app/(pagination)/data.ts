// lib/data.ts
export type Player = {
  id: number;
  name: string;
  country: string;
  runs: number;
  matches: number;
};

export const generatePlayers = (numOfPlayers : number): Player[] => {
  const realPlayers: { name: string; country: string }[] = [
    { name: 'Virat Kohli', country: 'India' },
    { name: 'Steve Smith', country: 'Australia' },
    { name: 'Joe Root', country: 'England' },
    { name: 'Babar Azam', country: 'Pakistan' },
    { name: 'Kane Williamson', country: 'New Zealand' },
    { name: 'Rohit Sharma', country: 'India' },
    { name: 'David Warner', country: 'Australia' },
    { name: 'Ben Stokes', country: 'England' },
    { name: 'Faf du Plessis', country: 'South Africa' },
    { name: 'Quinton de Kock', country: 'South Africa' },
    { name: 'MS Dhoni', country: 'India' },
    { name: 'Shakib Al Hasan', country: 'Bangladesh' },
    { name: 'Tamim Iqbal', country: 'Bangladesh' },
    { name: 'KL Rahul', country: 'India' },
    { name: 'Shubman Gill', country: 'India' },
    { name: 'Jos Buttler', country: 'England' },
    { name: 'Mohammad Rizwan', country: 'Pakistan' },
    { name: 'Shaheen Afridi', country: 'Pakistan' },
    { name: 'Rashid Khan', country: 'Afghanistan' },
    { name: 'Trent Boult', country: 'New Zealand' },
    { name: 'Jasprit Bumrah', country: 'India' },
    { name: 'Pat Cummins', country: 'Australia' },
    { name: 'Mitchell Starc', country: 'Australia' },
    { name: 'Ravindra Jadeja', country: 'India' },
    { name: 'Hardik Pandya', country: 'India' },
    { name: 'Moeen Ali', country: 'England' },
    { name: 'Hashim Amla', country: 'South Africa' },
    { name: 'AB de Villiers', country: 'South Africa' },
    { name: 'Chris Gayle', country: 'West Indies' },
    { name: 'Andre Russell', country: 'West Indies' },
  ];

  const players: Player[] = realPlayers.map((p, index) => ({
    id: index + 1,
    name: p.name,
    country: p.country,
    runs: Math.floor(Math.random() * 12000),
    matches: Math.floor(Math.random() * 400),
  }));

  return players;
};
