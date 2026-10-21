import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productsList } from '@/sample/productsData';
import ProductDetailClient from './ProductDetailClient';

export function generateStaticParams() {
  return productsList.map((product) => ({
    slug: product.route.replace('/products/', ''),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productsList.find(
    (p) => p.route.replace('/products/', '') === slug || p.route.endsWith(slug)
  );

  if (!product) {
    return {
      title: 'Product Not Found — Technocracy Group',
    };
  }

  return {
    title: `${product.productName} — Technocracy Group`,
    description: product.overview,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productsList.find(
    (p) => p.route.replace('/products/', '') === slug || p.route.endsWith(slug)
  );

  if (!product) {
    notFound();
  }

  return <ProductDetailClient slug={slug} />;
}
