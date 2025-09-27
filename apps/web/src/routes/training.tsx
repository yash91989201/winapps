import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/hero";
import { TrainingCourses } from "@/components/training/training-courses";

export const Route = createFileRoute("/training")({
  component: TrainingComponent,
});

function TrainingComponent() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrainingCourses />
    </div>
  );
}
