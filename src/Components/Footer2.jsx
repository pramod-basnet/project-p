import React from 'react';
const Footer2 = () => {
  const footerStyles = {
    footer: {
      backgroundColor: '#f8f9f2',
      padding: '2rem 0',
      color: '#333',
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '1.5rem',
      color: '#2c3e50',
    },
    section: {
      marginBottom: '1.5rem',
    },
    sectionTitle: {
      fontSize: '1.2rem',
      marginBottom: '0.8rem',
      color: '#2c3e50',
    },
    contactInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2rem',
    },
    officeHours: {
      flex: 1,
      minWidth: '200px',
    },
    contactMethods: {
      flex: 1,
      minWidth: '200px',
    }
  }
  return (
    <footer class=" md:bottom-0 bg -white w-[92%] m-auto  mt-12 p-8 rounded-2xl bottom-0 ">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left bottom-0">
                <div>
                    <h3 class="text-xl font-semibold mb-4">Company</h3>
                    <ul class="space-y-2">
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-semibold mb-4">Support</h3>
                    <ul class="space-y-2">
                        <li>
                            <a href="#">Help Center</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-semibold mb-4">Community</h3>
                    <ul class="space-y-2">
                        <li>
                            <a href="#">Forums</a>
                        </li>
                        <li>
                            <a href="#">Events</a>
                        </li>
                        <li>
                            <a href="#">Newsletter</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-8 text-center">
                <p class="text-sm">© 2025  Ghogu Gang. All rights reserved.</p>
                </div>




                
        </footer>
  );
};

export default Footer2;