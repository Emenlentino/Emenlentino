import { useContext, useState, Suspense, lazy } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, IconButton, Container, Box, Drawer, List, 
  ListItemButton, ListItemText, Fab, Tooltip, CircularProgress, Avatar
} from '@mui/material';
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material';
import NavigationIcon from '@mui/icons-material/Navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ResumeContext } from './context/ResumeContext.jsx';
import { ThemeModeContext } from './context/ThemeContext.jsx';

const About = lazy(() => import('./components/ResumeSections').then(m => ({ default: m.AboutSection })));
const Experience = lazy(() => import('./components/ResumeSections').then(m => ({ default: m.ExperienceSection })));
const Skills = lazy(() => import('./components/ResumeSections').then(m => ({ default: m.SkillsSection })));
const Projects = lazy(() => import('./components/ResumeSections').then(m => ({ default: m.ProjectsSection })));
const Education = lazy(() => import('./components/ResumeSections').then(m => ({ default: m.EducationSection })));
const Contact = lazy(() => import('./components/ResumeSections').then(m => ({ default: m.ContactSection })));

const navItems = [
  { label: 'About', path: '/' },
  { label: 'Experience', path: '/experience' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Education', path: '/education' },
  { label: 'Contact', path: '/contact' },
];

// Enhanced Loading Component
const LoadingFallback = () => (
  <Box 
    sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '400px',
      flexDirection: 'column',
      gap: 2
    }}
  >
    <CircularProgress size={60} thickness={4} />
    <Typography variant="body2" color="text.secondary">
      Loading content...
    </Typography>
  </Box>
);

export default function App() {
  const { data } = useContext(ResumeContext);
  const { mode, toggleMode } = useContext(ThemeModeContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  // Get initials for avatar
  const getInitials = (name) => {
    if (!name) return 'R';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <>
      {/* Animated Top AppBar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <AppBar 
          position="sticky" 
          elevation={mode === 'dark' ? 4 : 2}
          sx={{
            backdropFilter: 'blur(10px)',
            backgroundColor: mode === 'dark' 
              ? 'rgba(18, 18, 18, 0.9)' 
              : 'rgba(255, 255, 255, 0.9)',
            borderBottom: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
          }}
        >
          <Toolbar>
            <Avatar 
              sx={{ 
                mr: 2, 
                bgcolor: 'primary.main',
                width: 40,
                height: 40,
                fontWeight: 'bold'
              }}
            >
              {getInitials(data?.name)}
            </Avatar>
            <Typography 
              variant="h6" 
              sx={{ 
                flexGrow: 1,
                fontWeight: 600,
                background: mode === 'dark'
                  ? 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
                  : 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {data?.name || 'Resume'}
            </Typography>
            <Tooltip title={mode === 'dark' ? 'Light Mode' : 'Dark Mode'}>
              <IconButton 
                color="inherit" 
                onClick={toggleMode}
                sx={{
                  '&:hover': {
                    transform: 'rotate(180deg)',
                    transition: 'transform 0.5s ease',
                  }
                }}
              >
                {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </motion.div>

      {/* Floating Sidebar Toggle with Pulse Animation */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', bounce: 0.6, duration: 1, delay: 0.5 }}
        style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1300 }}
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Tooltip title="Open Menu" arrow placement="left">
            <Fab 
              color="primary" 
              onClick={() => setDrawerOpen(true)} 
              aria-label="menu"
              sx={{
                boxShadow: mode === 'dark' ? 6 : 4,
                background: mode === 'dark'
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  : 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: 8,
                }
              }}
            >
              <MenuIcon />
            </Fab>
          </Tooltip>
        </motion.div>
      </motion.div>

      {/* Enhanced Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          component: motion.div,
          initial: { x: -300 },
          animate: { x: 0 },
          exit: { x: -300 },
          sx: {
            width: 280,
            background: mode === 'dark' 
              ? 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)'
              : 'linear-gradient(180deg, #f5f7fa 0%, #c3cfe2 100%)',
            boxShadow: 6,
          }
        }}
      >
        <Box 
          sx={{ 
            p: 3,
            borderBottom: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
            textAlign: 'center'
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <Avatar 
              sx={{ 
                width: 80, 
                height: 80, 
                margin: '0 auto 16px',
                bgcolor: 'primary.main',
                fontSize: '2rem',
                fontWeight: 'bold',
                boxShadow: 3
              }}
            >
              {getInitials(data?.name)}
            </Avatar>
          </motion.div>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data?.title}
          </Typography>
        </Box>
        <List sx={{ pt: 2 }}>
          {navItems.map(({ label, path }, index) => (
            <motion.div
              key={path}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <ListItemButton
                component={Link}
                to={path}
                onClick={() => setDrawerOpen(false)}
                selected={location.pathname === path}
                sx={{
                  mx: 1,
                  mb: 0.5,
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: mode === 'dark' ? 'rgba(33, 150, 243, 0.15)' : 'rgba(25, 118, 210, 0.1)',
                    transform: 'translateX(8px)',
                    transition: 'all 0.3s ease',
                  },
                  '&.Mui-selected': {
                    backgroundColor: mode === 'dark' ? 'rgba(33, 150, 243, 0.25)' : 'rgba(25, 118, 210, 0.15)',
                    '&:hover': {
                      backgroundColor: mode === 'dark' ? 'rgba(33, 150, 243, 0.3)' : 'rgba(25, 118, 210, 0.2)',
                    }
                  }
                }}
              >
                <ListItemText 
                  primary={label}
                  primaryTypographyProps={{
                    fontWeight: location.pathname === path ? 600 : 400
                  }}
                />
              </ListItemButton>
            </motion.div>
          ))}
        </List>
      </Drawer>

      {/* Main Content with Animated Container */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <Suspense fallback={<LoadingFallback />}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <About data={data} />
                </motion.div>
              </Suspense>
            } />
            <Route path="/experience" element={
              <Suspense fallback={<LoadingFallback />}>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Experience data={data} />
                </motion.div>
              </Suspense>
            } />
            <Route path="/skills" element={
              <Suspense fallback={<LoadingFallback />}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <Skills data={data} />
                </motion.div>
              </Suspense>
            } />
            <Route path="/projects" element={
              <Suspense fallback={<LoadingFallback />}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Projects data={data} />
                </motion.div>
              </Suspense>
            } />
            <Route path="/education" element={
              <Suspense fallback={<LoadingFallback />}>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Education data={data} />
                </motion.div>
              </Suspense>
            } />
            <Route path="/contact" element={
              <Suspense fallback={<LoadingFallback />}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <Contact data={data} />
                </motion.div>
              </Suspense>
            } />
          </Routes>
        </AnimatePresence>
      </Container>

      {/* Animated Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Box 
          sx={{ 
            py: 3, 
            textAlign: 'center', 
            borderTop: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
            background: mode === 'dark' 
              ? 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.2) 100%)'
              : 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.02) 100%)',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} {data?.name || 'Emem Ufeh'} Built with ❤️ . All rights reserved.
          </Typography>
        </Box>
      </motion.div>
    </>
  );
}