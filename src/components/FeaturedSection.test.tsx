import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FeaturedSection from './FeaturedSection';
import { content } from '../data/content';

describe('FeaturedSection', () => {
  it('renders featured section in German', () => {
    const t = content.de;
    render(<FeaturedSection lang="de" t={t} />);

    expect(screen.getByText('⭐ Empfohlen')).toBeInTheDocument();
    expect(screen.getByText('Ordnungsamt Berlin (Online)')).toBeInTheDocument();
  });

  it('renders featured section in English', () => {
    const t = content.en;
    render(<FeaturedSection lang="en" t={t} />);

    expect(screen.getByText('⭐ Featured')).toBeInTheDocument();
    expect(screen.getByText('Berlin Public Order Office (Online)')).toBeInTheDocument();
  });

  it('renders Ordnungsamt description', () => {
    const t = content.de;
    render(<FeaturedSection lang="de" t={t} />);

    expect(
      screen.getByText(/Ruhestörung, wilder Müll, Falschparker/)
    ).toBeInTheDocument();
  });

  it('renders action button with correct link', () => {
    const t = content.de;
    render(<FeaturedSection lang="de" t={t} />);

    const link = screen.getByRole('link', { name: /Jetzt melden bei Ordnungsamt Berlin/i });
    expect(link).toHaveAttribute('href', 'https://ordnungsamt.berlin.de/frontend/meldungNeu/wo');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders explanation text in German', () => {
    const t = content.de;
    render(<FeaturedSection lang="de" t={t} />);

    expect(
      screen.getByText(
        /Das Ordnungsamt-Portal ist eine zentrale Anlaufstelle für viele Meldungen in Berlin/
      )
    ).toBeInTheDocument();
  });

  it('renders explanation text in English', () => {
    const t = content.en;
    render(<FeaturedSection lang="en" t={t} />);

    expect(
      screen.getByText(/The Public Order Office portal is a central hub for many reports in Berlin/)
    ).toBeInTheDocument();
  });
});
