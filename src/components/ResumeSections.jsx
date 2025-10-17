import React from 'react';
import {
  Box, Typography, Chip, Link, Card, CardContent, Button, Grid, Avatar, Divider,
  Paper, Stack
} from '@mui/material';
import {
  Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent
} from '@mui/lab'; // Correct import for Timeline components
import { Download, Email, Phone, LinkedIn, GitHub, Language, Work, School, Code, EmojiEvents, Translate } from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4 } },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const floatVariants = {
  animate: { y: [0, -8, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } },
};

export const AboutSection = ({ data }) => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    <Box sx={{ p: 3 }}>
      <motion.div variants={floatVariants}>
        <Card
          elevation={6}
          sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            mb: 4,
            borderRadius: 3,
            overflow: 'hidden',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Stack direction="row" spacing={3} alignItems="center" flexWrap="wrap">
              <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }}>
                <Avatar sx={{ width: 100, height: 100, bgcolor: 'rgba(255,255,255,0.3)' }}>
                  {data?.name?.charAt(0) || 'E'}
                </Avatar>
              </motion.div>
              <Box flex={1}>
                <Typography variant="h3" sx={{ fontWeight: 700 }}>{data?.name || 'Your Name'}</Typography>
                <Typography variant="h5" sx={{ opacity: 0.9, mb: 1 }}>{data?.title || 'Your Title'}</Typography>
                <Typography variant="body1">📍 {data?.location || 'Location'}</Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div variants={staggerContainer} initial="initial" animate="animate">
        <Card elevation={4} sx={{ mb: 3, borderRadius: 3 }}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <EmojiEvents color="primary" /> About Me
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
              {data?.about || 'Loading...'}
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                startIcon={<Download />}
                href="/resume.pdf"
                download="Emem_Ufeh_Resume.pdf"
                sx={{
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 600,
                }}
                aria-label="Download resume PDF"
              >
                Download Resume
              </Button>
            </motion.div>
          </CardContent>
        </Card>
        {data?.summary && data.summary !== data.about && (
          <motion.div variants={itemVariants}>
            <Card sx={{ borderRadius: 3, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Professional Summary</Typography>
                <Typography variant="body2">{data.summary}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </Box>
  </motion.div>
);

export const ExperienceSection = ({ data }) => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
        <Work color="primary" /> Work Experience
      </Typography>
      <Timeline position="alternate">
        {data?.experience?.map((exp, i) => (
          <TimelineItem key={i}>
            <TimelineSeparator>
              <motion.div variants={floatVariants}>
                <TimelineDot color="primary" />
              </motion.div>
              {i < data.experience.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }}>
                <Card sx={{ borderRadius: 3, p: 2 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                      {exp.role}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">{exp.company} • {exp.duration}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>{exp.description}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  </motion.div>
);

export const SkillsSection = ({ data }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Box sx={{ p: 3 }} ref={ref}>
        <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Code color="primary" /> Skills & Expertise
        </Typography>
        <Grid container spacing={3}>
          {Object.entries(data?.skills || {}).map(([category, skills], i) => (
            <Grid item xs={12} sm={6} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <Paper elevation={4} sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, textTransform: 'capitalize' }}>
                    {category.replace(/([A-Z])/g, ' $1')}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {skills.map((skill, j) => (
                      <motion.div key={j} whileHover={{ scale: 1.1, rotate: 5 }}>
                        <Chip
                          label={skill}
                          color="primary"
                          variant="filled"
                          sx={{ m: 0.5, borderRadius: '16px' }}
                        />
                      </motion.div>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
};

export const ProjectsSection = ({ data }) => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
        <Code color="primary" /> Projects
      </Typography>
      <Grid container spacing={3}>
        {data?.projects?.map((project, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} className="floatable">
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>{project.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{project.description}</Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
                    {project.technologies.map((tech, j) => (
                      <Chip key={j} label={tech} color="secondary" size="small" />
                    ))}
                  </Stack>
                  <motion.div whileHover={{ scale: 1.05 }} sx={{ mt: 2 }}>
                    <Button href={project.link} target="_blank" variant="outlined" aria-label={`View ${project.name}`}>
                      View Project
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  </motion.div>
);

export const EducationSection = ({ data }) => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
        <School color="primary" /> Education & Certifications
      </Typography>
      <motion.div variants={staggerContainer} initial="initial" animate="animate">
        {data?.education?.map((edu, i) => (
          <motion.div key={i} variants={itemVariants} whileHover={{ scale: 1.02 }}>
            <Card sx={{ mb: 3, borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                  {edu.degree}
                </Typography>
                <Typography variant="body2" color="text.secondary">{edu.institution} • {edu.year}</Typography>
                {edu.gpa && (
                  <Typography variant="body2" color="text.secondary">GPA: {edu.gpa}</Typography>
                )}
                <Typography variant="body2" sx={{ mt: 1 }}>{edu.description}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
        {data?.certifications?.map((cert, i) => (
          <motion.div key={i} variants={itemVariants}>
            <Paper sx={{ p: 2, mb: 2, borderLeft: '4px solid', borderColor: 'primary.main' }}>
              <Typography variant="h6">{cert.name}</Typography>
              <Typography variant="body2" color="text.secondary">{cert.issuer} • {cert.year}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>{cert.description}</Typography>
            </Paper>
          </motion.div>
        ))}
      </motion.div>
    </Box>
  </motion.div>
);

export const InterestsSection = ({ data }) => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
        <EmojiEvents color="primary" /> Interests & Availability
      </Typography>
      <motion.div variants={staggerContainer} initial="initial" animate="animate">
        <Card sx={{ mb: 3, borderRadius: 3 }} className="floatable">
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>Interests</Typography>
            <Typography variant="body1">{data?.interests || 'No interests provided.'}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ borderRadius: 3 }} className="floatable">
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>Availability</Typography>
            <Typography variant="body1">{data?.availability || 'No availability provided.'}</Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  </motion.div>
);

export const ContactSection = ({ data }) => {
  const contactItems = [
    { icon: <Email />, label: 'Email', value: data?.contact?.email, href: `mailto:${data?.contact?.email}` },
    { icon: <Phone />, label: 'Phone', value: data?.contact?.phone, href: `tel:${data?.contact?.phone}` },
    { icon: <LinkedIn />, label: 'LinkedIn', value: 'LinkedIn Profile', href: data?.contact?.linkedin },
    { icon: <GitHub />, label: 'GitHub', value: 'GitHub Profile', href: data?.contact?.github },
    { icon: <Language />, label: 'Portfolio', value: 'Portfolio Website', href: data?.contact?.portfolio },
  ];

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Box sx={{ p: 3 }}>
        <Card sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', borderRadius: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>📬 Let's Connect!</Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              I'm excited to explore new opportunities and collaborations!
            </Typography>
            <Grid container spacing={2}>
              {contactItems.map((item, i) => item.href && (
                <Grid item xs={12} sm={6} key={i}>
                  <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
                    <Paper
                      sx={{
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                      }}
                      component="a"
                      href={item.href}
                      target={item.label !== 'Email' && item.label !== 'Phone' ? '_blank' : undefined}
                      rel="noopener"
                    >
                      {item.icon}
                      <Box>
                        <Typography variant="caption" color="text.secondary">{item.label}</Typography>
                        <Typography variant="body2">{item.value}</Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </motion.div>
  );
};