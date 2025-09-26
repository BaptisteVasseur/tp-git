 // Mise à jour dynamique des statistiques
        document.addEventListener('DOMContentLoaded', function() {
            // Compter les cours disponibles
            const availableCourses = document.querySelectorAll('.status-in-progress, .status-available').length;
            const totalCourses = document.querySelectorAll('.course-card').length;
            const completion = Math.round((availableCourses / totalCourses) * 100);
            
            document.getElementById('available-courses').textContent = availableCourses;
            document.getElementById('total-courses').textContent = totalCourses;
            document.getElementById('completion').textContent = completion + '%';
        });