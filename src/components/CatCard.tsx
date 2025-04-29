import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

interface CatCardProps {
  name: string;
  breed: string;
  age: string;
  imageUrl: string;
  description: string;
}

const CatCard = ({ name, breed, age, imageUrl, description }: CatCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-cat-orange">{name}</CardTitle>
        <CardDescription className="flex justify-between">
          <span>{breed}</span>
          <span>{age}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-end pt-2">
        <div className="text-sm text-cat-gray">❤️ Любить ласку</div>
      </CardFooter>
    </Card>
  );
};

export default CatCard;
