import { useRouterState } from '@tanstack/react-router';
import { useMemo } from 'react';

// Function to get tree cluster titles
const getTreeClusterTitle = (id: string): string => {
  const treeClusters = {
    '1': 'Eiche',
    '2': 'Birke',
    '3': 'Kiefer',
    // Add more clusters as needed
  };

  return treeClusters[id] || 'Unbekannter Baum';
};

export function useBreadcrumbs() {
  const matches = useRouterState({ select: (s) => s.matches });

  const breadcrumbs = useMemo(() => {
    const pathNameMap: { [key: string]: string } = {
      '/': 'Dashboard',
      '/sensors': 'Sensoren',
      '/settings': 'Einstellungen',
      '/team': 'Mitarbeitende',
      '/vehicles': 'Fahrzeuge',
      '/waypoints': 'Einsatzpläne',
      '/waypoints/new': 'Neuer Einsatzplan',
      '/map': 'Kataster',
      '/treecluster': 'Bewässerungsgruppen',
    };

    const breadcrumbList: { title: string; path: string }[] = [];

    matches.forEach(({ pathname }) => {
      // Check for tree cluster paths and extract the ID
      const treeClusterMatch = pathname.match(/\/treecluster\/(\d+)/);
      if (treeClusterMatch) {
        const treeClusterId = treeClusterMatch[1];
        const treeClusterTitle = getTreeClusterTitle(treeClusterId);
        breadcrumbList.push({
          title: treeClusterTitle,
          path: pathname,
        });
        // Add the parent breadcrumb for tree clusters
        breadcrumbList.unshift({
          title: 'Bewässerungsgruppen',
          path: '/treecluster',
        });
      } else {
        const title = pathNameMap[pathname] || 'Kein Titel vorhanden';
        breadcrumbList.push({
          title,
          path: pathname,
        });
      }
    });

    return breadcrumbList;
  }, [matches]);

  return breadcrumbs;
}
