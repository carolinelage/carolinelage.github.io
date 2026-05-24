export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: "01",
    role: "experiences.job1.role",
    company: "experiences.job1.company",
    period: "experiences.job1.period",
    description: "experiences.job1.description",
    tags: ["Technical Writing", "AI Research", "Product Strategy"]
  },
  {
    id: "02",
    role: "experiences.job2.role",
    company: "experiences.job2.company",
    period: "experiences.job2.period",
    description: "experiences.job2.description",
    tags: ["Product Design", "E-commerce", "WooCommerce", "WordPress"]
  },
  {
    id: "03",
    role: "experiences.job3.role",
    company: "experiences.job3.company",
    period: "experiences.job3.period",
    description: "experiences.job3.description",
    tags: [".NET Core", "C#", "Angular", "MongoDB", "SQL Server", "WebForms"]
  },
  {
    id: "04",
    role: "experiences.job4.role",
    company: "experiences.job4.company",
    period: "experiences.job4.period",
    description: "experiences.job4.description",
    tags: ["C#", ".NET", "ERP RM", "SCRUM", "Kanban", "CI/CD", "Web", "Desktop"]
  }
];
