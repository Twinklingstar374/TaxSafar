import React from "react";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import ServicePageClient from "@/components/ServicePageClient";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  
  // Find the requested service
  const service = services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}
