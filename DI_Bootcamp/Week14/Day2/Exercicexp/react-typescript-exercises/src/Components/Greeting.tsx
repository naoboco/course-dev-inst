interface GreetingProps {
  name: string;
  messageCount: number;
}

function Greeting({ name, messageCount }: GreetingProps) {
  return (
    <div>
      <h2>Hello {name}</h2>
      <p>You have {messageCount} messages.</p>
    </div>
  );
}

export default Greeting;