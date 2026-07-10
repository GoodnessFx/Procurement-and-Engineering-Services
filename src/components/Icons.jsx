import React from 'react';

const createIcon = (paths, attrs = {}) => (props) => {
  const { dangerouslySetInnerHTML, ...restAttrs } = attrs;
  
  if (dangerouslySetInnerHTML) {
    return (
      <svg
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={props.strokeWidth || 2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...restAttrs}
        {...props}
        aria-hidden="true"
        focusable="false"
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      />
    );
  }
  
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={props.strokeWidth || 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...attrs}
      {...props}
      aria-hidden="true"
      focusable="false"
    >
      {paths.map((path, i) => (
        <path key={i} d={path} />
      ))}
    </svg>
  );
};

export const Icons = {
  procurement: createIcon(['M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z', 'M3.27 6.96 12 12.01 20.73 6.96', 'M12 22.08V12']),
  engineering: createIcon(['M3 3h18v18H3z', 'M12 8v8', 'M8 12h8', 'M17.5 3.5L15 6l4 4 2.5-2.5', 'M6.5 17.5L9 15l4 4-2.5 2.5']),
  'project-management': createIcon(['M3 4h18a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'M16 2v4', 'M8 2v4', 'M3 10h18', 'M8 14h.01', 'M12 14h.01', 'M16 14h.01', 'M8 18h.01', 'M12 18h.01', 'M16 18h.01']),
  inspection: createIcon(['M22 11.08V12a10 10 0 1 1-5.93-9.14', 'M22 4 12 14.01 9 11.01']),
  expediting: createIcon(['M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z', 'M3.27 6.96 12 12.01 20.73 6.96', 'M12 22.08V12']),
  manpower: createIcon(['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', 'M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', 'M23 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75']),
  regional: createIcon(['M12 12a10 10 0 1 0 0 20 10 10 0 0 0 0-20z', 'M2 12h20', 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z']),
  certified: createIcon(['M22 11.08V12a10 10 0 1 1-5.93-9.14', 'M22 4 12 14.01 9 11.01']),
  network: createIcon(['M1 1h22v22H1z', 'M12 5v14M5 12h14']),
  digital: createIcon(['M2 3h20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z', 'M8 21h8', 'M12 17v4']),
  compliance: createIcon(['M9 12l2 2 4-4', 'M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10', 'M3 7h18', 'M9 7v4', 'M15 7v4']),
  accountability: createIcon(['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', 'M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', 'M23 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75']),
  epc: createIcon(['M12 2L2 7l10 5 10-5-10-5z', 'M2 17l10 5 10-5', 'M2 12l10 5 10-5']),
  owner: createIcon(['M21 12V7H5V2H12L22 12', 'M3 9V4L12 2V7L3 9Z', 'M21 17V12H12V22L3 12']),
  fabricator: createIcon(['M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z']),
  government: createIcon(['M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z']),
  whatsapp: createIcon([], { dangerouslySetInnerHTML: { __html: '<path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>' } }),
  phone: createIcon(['M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z']),
  email: createIcon(['M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z', 'M22 6 12 13 2 6']),
  location: createIcon(['M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z', 'M12 10a3 3 0 0 1 0 6 3 3 0 0 1 0-6z']),
  users: createIcon(['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', 'M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', 'M23 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75']),
  shield: createIcon(['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z']),
  globe: createIcon(['M12 12a10 10 0 1 0 0 20 10 10 0 0 0 0-20z', 'M2 12h20', 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z']),
  award: createIcon(['M12 8a7 7 0 0 1 0 14 7 7 0 0 1 0-14z', 'M8.21 13.89 7 23 12 20 17 23 15.79 13.88']),
  building: createIcon(['M3 21h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1z', 'M5 21V13', 'M19 21V13', 'M9 21V15', 'M15 21V17', 'M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14']),
  document: createIcon(['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6', 'M16 13H8', 'M16 17H8', 'M10 9H9H8']),
  truck: createIcon(['M5 12h14', 'M5 12a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2', 'M15 12V6a2 2 0 0 1 2-2h4', 'M16 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4z', 'M6 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4z']),
  hardHat: createIcon(['M2 12h20', 'M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5', 'M6 19v-5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5', 'M6 14h12']),
  search: createIcon(['M11 11a8 8 0 1 0 0 16 8 8 0 0 0 0-16z', 'M21 21l-4.35-4.35']),
  filter: createIcon(['M22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3']),
  download: createIcon(['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M7 10 12 15 17 10', 'M12 15V3']),
  upload: createIcon(['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M17 8 12 3 7 8', 'M12 3v12']),
  chevronRight: createIcon(['M9 18l6-6-6-6']),
  chevronLeft: createIcon(['M15 18l-6-6 6-6']),
  chevronDown: createIcon(['M6 9l6 6 6-6']),
  chevronUp: createIcon(['M18 15l-6-6-6 6']),
  plus: createIcon(['M12 5v14', 'M5 12h14']),
  minus: createIcon(['M5 12h14']),
  externalLink: createIcon(['M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', 'M15 3h6v6', 'M10 14 21 3']),
  mail: createIcon(['M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z', 'M22 6 12 13 2 6']),
  phoneIcon: createIcon(['M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z']),
  locationIcon: createIcon(['M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z', 'M12 10a3 3 0 0 1 0 6 3 3 0 0 1 0-6z']),
  quote: createIcon(['M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2z', 'M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4 2.75 4v1'], { strokeWidth: 1.5 }),
  star: createIcon(['M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21.02 7 14.14 2 9.27l6.91-1.01L12 2z'], { fill: 'currentColor' }),
  linkedin: createIcon([], { dangerouslySetInnerHTML: { __html: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>' } }),
  twitter: createIcon([], { dangerouslySetInnerHTML: { __html: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>' } }),
  instagram: createIcon(['M2 2h20a5 5 0 0 1 5 5v20a5 5 0 0 1-5 5H2a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z', 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z', 'M17.5 6.5h.01']),
  clock: createIcon(['M12 12a10 10 0 1 0 0 20 10 10 0 0 0 0-20z', 'M12 6v6l4 2']),
  mapPin: createIcon(['M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z', 'M12 10a3 3 0 0 1 0 6 3 3 0 0 1 0-6z']),
  check: createIcon(['M20 6 9 17 4 12'], { strokeWidth: 3 }),
  arrowRight: createIcon(['M5 12h14', 'M12 5l7 7-7 7'], { strokeWidth: 2.5 }),
  arrowDown: createIcon(['M6 9l6 6 6-6'], { strokeWidth: 2.5 }),
  arrowUp: createIcon(['M18 15l-6-6-6 6'], { strokeWidth: 2.5 }),
  menu: createIcon(['M3 12h18', 'M3 6h18', 'M3 18h18']),
  alert: createIcon(['M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z', 'M12 9v4', 'M12 17h.01']),
  paperPlane: createIcon(['M22 2L11 13', 'M22 2l-7 20-4-9-9-4 20-7z']),
  badge: createIcon(['M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', 'M9 22V12l9-7', 'M12 14v4', 'M8 16h8']),
};

export function Icon({ name, className = '', ...props }) {
  const IconComponent = Icons[name];
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  return <IconComponent className={className} {...props} />;
}

export default Icons;