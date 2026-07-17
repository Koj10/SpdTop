"use client";

import Link from "next/link";
import { SectionHeading, ServiceCard } from "@/components/shared/ServiceCard";
import { useDictionary, useLocalizedHref } from "@/components/providers/LocaleProvider";

export function ServicesPreview() {
  const dict = useDictionary();
  const href = useLocalizedHref();
  const { services, servicesPreview, ui } = dict;

  return (
    <section className="section-padding mx-auto max-w-7xl">
      <SectionHeading subtitle={servicesPreview.subtitle} title={servicesPreview.title} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 3).map((service, i) => (
          <ServiceCard key={service.id} {...service} index={i} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href={href("/services")} className="btn-ghost">
          {ui.allServices}
        </Link>
      </div>
    </section>
  );
}
