import Robot_call_card from '../components/robot-call-card';

const Cards = () => {
  const male_robot = '/male-robot.png';
  const female_robot = '/female-robot.png';
  return (
    <div className="flex justify-center items-center gap-x-16 h-screen bg-gradient-to-br from-purple-900 via-purple-400 to-indigo-400 shadow-xl">
      <Robot_call_card gender="Male" name="Max" image={male_robot} />
      <Robot_call_card gender="Female" name="Lara" image={female_robot} />
    </div>
  );
};

export default Cards;
