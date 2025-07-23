import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

type Skill = {
  name: string;
  url: string;
};

type SkillCardProps = {
  skill: Skill;
  index: number;
};

export const SkillCard = ({ skill, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-3">
          <div className="flex items-center justify-center mb-2">
            <img
              src={skill.url || "/placeholder.svg"}
              className="h-20 w-20 object-contain mx-auto"
              alt={skill.name}
            />
          </div>
          <h3 className="text-center font-medium text-sm text-foreground group-hover:text-primary transition-colors duration-200">
            {skill.name}
          </h3>
        </CardContent>
      </Card>
    </motion.div>
  );
};