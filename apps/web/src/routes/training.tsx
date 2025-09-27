import { createFileRoute } from "@tanstack/react-router";
import { TrainingHero } from "@/components/training/training-hero";
import { TrainingCourses } from "@/components/training/training-courses";

export const Route = createFileRoute("/training")({
  component: TrainingComponent,
});

function TrainingComponent() {
  return (
    <div className="min-h-screen">
      <TrainingHero />
      <TrainingCourses />
    </div>
  );
}
