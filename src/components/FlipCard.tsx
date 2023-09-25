import "./user.css";
interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

function FlipCard({ frontContent, backContent }: FlipCardProps) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">{frontContent}</div>
        <div className="flip-card-back">{backContent}</div>
      </div>
    </div>
  );
}

export default FlipCard;
