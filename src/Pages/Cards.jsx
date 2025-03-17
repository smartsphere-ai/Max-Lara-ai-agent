import Robot_call_card from '../components/robot-call-card';

const Cards = () => {
  const male_robot = '/male-robot.png';
  const female_robot = '/female-robot.png';
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-x-16 py-8 md:py-0 h-auto md:h-screen bg-gradient-to-br from-purple-900 via-purple-400 to-indigo-400 shadow-xl">
      <Robot_call_card gender="Male" name="Max" image={male_robot} />
      <Robot_call_card gender="Female" name="Lara" image={female_robot} />
    </div>
  );
};

export default Cards;
