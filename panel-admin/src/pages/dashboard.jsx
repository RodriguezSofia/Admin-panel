import React from 'react';
import {
  BookOpen,
  Users,
  Bookmark,
  Star,
  ArrowUpRight,
  Clock3,
  LibraryBig,
  Sparkles
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div style={containerStyle}>
      {/* HEADER */}
      <header style={headerStyle}>
        <div>
          <span style={welcomeBadge}>
            ✦ Biblioteca Virtual
          </span>

          <h1 style={titleStyle}>
            Panel Central
          </h1>

          <p style={subtitleStyle}>
            Supervisa la actividad literaria, préstamos y movimiento
            general de la biblioteca.
          </p>
        </div>

        <button style={exploreButton}>
          Explorar Catálogo
          <ArrowUpRight size={18} />
        </button>
      </header>

      {/* HERO */}
      <section style={heroStyle}>
        <div>
          <p style={heroMiniText}>
            Archivo Central
          </p>

          <h2 style={heroTitle}>
            “Una biblioteca no es un lujo, sino una necesidad.”
          </h2>

          <p style={heroDescription}>
            Gestiona colecciones, lectores y préstamos desde un espacio
            diseñado para organizar conocimiento y creatividad.
          </p>
        </div>

        <div style={heroIconContainer}>
          <LibraryBig size={80} strokeWidth={1.5} />
        </div>
      </section>

      {/* CARDS */}
      <section style={cardsContainer}>
        <DashboardCard
          icon={<BookOpen size={18} />}
          title="Libros Prestados"
          value="412"
          detail="15 activos hoy"
          bg="#FCE9AB"
          color="#FC8A2D"
        />

        <DashboardCard
          icon={<Users size={18} />}
          title="Lectores Activos"
          value="1,248"
          detail="Comunidad de lectura"
          bg="#F7F3EE"
          color="#7C756E"
        />

        <DashboardCard
          icon={<Bookmark size={18} />}
          title="Títulos del Catálogo"
          value="860"
          detail="En estantería virtual"
          bg="#FCE9AB"
          color="#9E9820"
        />

        <DashboardCard
          icon={<Star size={18} />}
          title="Reseñas Nuevas"
          value="48"
          detail="Críticas de la semana"
          bg="#FFE8EA"
          color="#C42B34"
        />
      </section>

      {/* GRID INFERIOR */}
      <section style={bottomGrid}>
        {/* ACTIVIDAD */}
        <div style={activityContainer}>
          <div style={sectionHeader}>
            <div>
              <h2 style={sectionTitle}>
                Actividad Reciente
              </h2>
              <p style={sectionSubtitle}>
                Movimiento más reciente del sistema
              </p>
            </div>

            <Clock3 size={18} color="#7C756E" />
          </div>

          <div style={activityList}>
            <ActivityRow
              emoji="📚"
              text={
                <>
                  <strong>Denise Ocampo</strong> reservó{' '}
                  <em>"El Aleph"</em> de Borges
                </>
              }
              time="Hace 12 min"
            />

            <ActivityRow
              emoji="✍️"
              text={
                <>
                  <strong>Carlos Ruiz</strong> publicó una nueva reseña
                </>
              }
              time="Hace 2 horas"
            />

            <ActivityRow
              emoji="📖"
              text={
                <>
                  <strong>Administración</strong> indexó 5 volúmenes
                  clásicos
                </>
              }
              time="Ayer"
            />

            <ActivityRow
              emoji="✨"
              text={
                <>
                  <strong>Andrea Gil</strong> agregó nuevos favoritos
                </>
              }
              time="Hace 1 día"
            />
          </div>
        </div>

        {/* PANEL LATERAL */}
        <div style={sidePanel}>
          <div style={miniCard}>
            <div style={miniIcon}>
              <Sparkles size={18} />
            </div>

            <div>
              <h3 style={miniTitle}>
                Libro Destacado
              </h3>

              <p style={miniText}>
                “Cien años de soledad” continúa siendo el más leído.
              </p>
            </div>
          </div>

          <div style={quoteCard}>
            <p style={quoteText}>
              “Siempre imaginé que el paraíso sería algún tipo de biblioteca.”
            </p>

            <span style={quoteAuthor}>
              — Jorge Luis Borges
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

/* COMPONENTE CARD */
const DashboardCard = ({
  icon,
  title,
  value,
  detail,
  bg,
  color
}) => {
  return (
    <div style={cardStyle}>
      <div style={badgeStyle(bg, color)}>
        {icon}
      </div>

      <p style={cardLabel}>
        {title}
      </p>

      <h2 style={cardValue}>
        {value}
      </h2>

      <span style={{ color, fontSize: '13px', fontWeight: '500' }}>
        ● {detail}
      </span>
    </div>
  );
};

/* COMPONENTE ACTIVIDAD */
const ActivityRow = ({ emoji, text, time }) => {
  return (
    <div style={rowStyle}>
      <div style={activityLeft}>
        <span>{emoji}</span>
        <span>{text}</span>
      </div>

      <span style={timeStyle}>
        {time}
      </span>
    </div>
  );
};

/* ESTILOS */

const containerStyle = {
  padding: '40px',
  maxWidth: '1400px',
  margin: '0 auto',
  backgroundColor: '#FCFBF8',
  minHeight: '100vh'
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '35px',
  flexWrap: 'wrap',
  gap: '20px'
};

const welcomeBadge = {
  display: 'inline-block',
  padding: '8px 14px',
  borderRadius: '999px',
  backgroundColor: '#FCE9AB',
  color: '#9E9820',
  fontSize: '12px',
  fontWeight: '600',
  marginBottom: '18px'
};

const titleStyle = {
  fontFamily: 'Georgia, serif',
  fontSize: '42px',
  color: '#2C2A29',
  fontWeight: '400',
  marginBottom: '10px'
};

const subtitleStyle = {
  color: '#7C756E',
  maxWidth: '650px',
  lineHeight: '1.7',
  fontSize: '15px'
};

const exploreButton = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  border: 'none',
  padding: '14px 20px',
  borderRadius: '16px',
  backgroundColor: '#C42B34',
  color: 'white',
  cursor: 'pointer',
  fontWeight: '600',
  boxShadow: '0px 10px 25px rgba(196, 43, 52, 0.15)'
};

const heroStyle = {
  background:
    'linear-gradient(135deg, #FFF7E8 0%, #FFFDF8 100%)',
  border: '1px solid #EFECE3',
  borderRadius: '28px',
  padding: '40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '35px',
  gap: '30px',
  flexWrap: 'wrap',
  boxShadow: '0px 12px 30px rgba(0,0,0,0.03)'
};

const heroMiniText = {
  textTransform: 'uppercase',
  letterSpacing: '2px',
  color: '#FC8A2D',
  fontSize: '12px',
  marginBottom: '12px',
  fontWeight: '600'
};

const heroTitle = {
  fontFamily: 'Georgia, serif',
  fontSize: '34px',
  color: '#2C2A29',
  fontWeight: '400',
  maxWidth: '650px',
  lineHeight: '1.3',
  marginBottom: '15px'
};

const heroDescription = {
  color: '#7C756E',
  lineHeight: '1.8',
  maxWidth: '620px'
};

const heroIconContainer = {
  backgroundColor: '#FCE9AB',
  width: '140px',
  height: '140px',
  borderRadius: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FC8A2D'
};

const cardsContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '25px',
  marginBottom: '35px'
};

const cardStyle = {
  backgroundColor: '#FFFFFF',
  padding: '28px',
  borderRadius: '24px',
  border: '1px solid #EFECE3',
  boxShadow: '0px 8px 24px rgba(156, 61, 37, 0.04)',
  transition: '0.3s ease'
};

const cardLabel = {
  fontSize: '12px',
  color: '#7C756E',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  marginTop: '18px',
  marginBottom: '10px'
};

const cardValue = {
  fontFamily: 'Georgia, serif',
  fontSize: '40px',
  color: '#2C2A29',
  fontWeight: '400',
  marginBottom: '10px'
};

const badgeStyle = (bgColor, textColor) => ({
  display: 'inline-flex',
  padding: '10px',
  borderRadius: '14px',
  backgroundColor: bgColor,
  color: textColor
});

const bottomGrid = {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gap: '25px'
};

const activityContainer = {
  backgroundColor: '#FFFFFF',
  borderRadius: '24px',
  border: '1px solid #EFECE3',
  padding: '30px',
  boxShadow: '0px 8px 24px rgba(156, 61, 37, 0.03)'
};

const sectionHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '25px'
};

const sectionTitle = {
  fontFamily: 'Georgia, serif',
  fontSize: '24px',
  color: '#2C2A29',
  fontWeight: '400'
};

const sectionSubtitle = {
  color: '#7C756E',
  fontSize: '13px',
  marginTop: '4px'
};

const activityList = {
  display: 'flex',
  flexDirection: 'column'
};

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '18px 0',
  borderBottom: '1px dashed #EFECE3',
  gap: '20px'
};

const activityLeft = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  color: '#2C2A29',
  fontSize: '14px'
};

const timeStyle = {
  color: '#7C756E',
  fontSize: '13px',
  whiteSpace: 'nowrap'
};

const sidePanel = {
  display: 'flex',
  flexDirection: 'column',
  gap: '25px'
};

const miniCard = {
  backgroundColor: '#FFFFFF',
  borderRadius: '24px',
  border: '1px solid #EFECE3',
  padding: '25px',
  display: 'flex',
  gap: '18px',
  alignItems: 'flex-start',
  boxShadow: '0px 8px 24px rgba(156, 61, 37, 0.03)'
};

const miniIcon = {
  backgroundColor: '#FFE8EA',
  color: '#C42B34',
  padding: '12px',
  borderRadius: '14px'
};

const miniTitle = {
  fontFamily: 'Georgia, serif',
  color: '#2C2A29',
  marginBottom: '8px',
  fontWeight: '400'
};

const miniText = {
  color: '#7C756E',
  fontSize: '14px',
  lineHeight: '1.7'
};

const quoteCard = {
  background:
    'linear-gradient(135deg, #9E9820 0%, #7F7B18 100%)',
  borderRadius: '24px',
  padding: '30px',
  color: 'white',
  minHeight: '220px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxShadow: '0px 12px 30px rgba(158, 152, 32, 0.18)'
};

const quoteText = {
  fontFamily: 'Georgia, serif',
  fontSize: '24px',
  lineHeight: '1.6',
  fontWeight: '400'
};

const quoteAuthor = {
  opacity: 0.8,
  fontSize: '14px'
};

export default Dashboard;