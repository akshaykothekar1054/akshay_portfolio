import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/sections/ProjectDetail";
import { PROJECT_DETAILS } from "@/lib/projectDetails";

export function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECT_DETAILS[slug];
  if (!project) return {};
  return {
    title: `${project.title} — Akshay Kothekar`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECT_DETAILS[slug];
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main>
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
}
