'use client';

import React, { useEffect } from 'react';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: { id?: string[] };
}

export default function Page({ params }: PageProps) {
  useEffect(() => {
    // Check if params.id is undefined or doesn't have any elements
    if (!params.id || params.id.length === 0) {
      notFound();
      return;
    }

    const id = Number.parseInt(params.id[0]);

    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);

  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${params.id?.[0]})`}</p>
    </div>
  );
}
