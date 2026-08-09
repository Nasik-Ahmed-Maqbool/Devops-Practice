
        function openLink() {
            var rollNumber = document.getElementById('rollNumber').value;
            var linkContainer = document.getElementById('linkContainer');

            // Check if the roll number is not empty
            if (rollNumber.trim() !== '') {
                // Replace 'your_base_url' and 'your_file_path' with your actual base URL and file path
		var link = 'documents/'+rollNumber+'.jpg';
                linkContainer.innerHTML = '<a href="' + link + '" target="_blank">View Student MarkSheet</a>';
            } else {
                linkContainer.innerHTML = 'Please enter a valid roll number.';
            }
        }
  