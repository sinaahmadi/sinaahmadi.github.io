import subprocess
import glob
import os

def char_counter(file_dir, param):
	# Counting total number of line/characters/words
	counter_command = "wc -X ".replace("X", param) + file_dir
	counter = subprocess.check_output(counter_command, shell=True)#=DEVNULL, stderr=STDOUT)
	n_counter = int(counter.split()[0])

	return n_counter

start_offset, end_offset = 50, 50
output_dir = "cleaned"
log_file = "cleaning_log.txt"
log_text = ""

experiments_list = [f for f in glob.glob("corpus/*.txt")]
for f in experiments_list:
	n_lines = char_counter(f, "l")
	cleaned_dir = "OUT_DIR/OUT_FILE".replace("OUT_DIR", output_dir).replace("OUT_FILE", f.split("/")[-1])
	# UTF-8 cleaner \S{20,}
	utf_conversion_command = ["| iconv", "-f", "utf-8", "-t", "utf-8", "-c"]
	# HTML-remover
	html_remover_command = ['| perl -0777 -pe \'s/<[^>]*>//gs\'']

	# Stdout command
	std_out = [" > " + cleaned_dir]

	# newline_replacer = [' | perl -0777 -pe \'s/\\n{2,}/\\n\\n/gmi\'']
	newline_replacer = [' | perl -0777 -pe \'s/(\\n[ ]*){2,}/\\n\\n/gmi\'']
	space_replacer = [" | tr", "-s \" \""]
	html_and_remover = [' | awk \'{gsub(/&nbsp;/," "); print }\'' ]
	hex_remover = ['| sed -e \'s/\\xc2\\xa0//g\'']
	space_begin_remover = [' | awk \'{gsub(/^ */,""); print }\'' ] 
	noisy_text_remover_offset = ['| perl -0777 -pe \'s/^([\\S]*[^\\w\\s][\\S]*)|([\\S]{20,500})$//gmi\'']
	noisy_text_remover = ['| perl -0777 -pe \'s/^[\\S]*[^\\w\\s][\\S]*$//gmi\'']
	javascript_remover = [' | awk \'{gsub(/^.*javascript.*$/,"\\n"); print }\'' ] 

	corpus_slicer_command = ["awk", "'NR >= STRT_FFST && NR <= ND_FFST'".replace("STRT_FFST", str(start_offset)).replace("ND_FFST", str(n_lines-end_offset)),f]
	#  + newline_replacer + space_replacer +
	finale_command = corpus_slicer_command + utf_conversion_command + html_remover_command + html_and_remover + hex_remover + javascript_remover + space_begin_remover + noisy_text_remover_offset + newline_replacer + std_out

	# print(" ".join( finale_command))
	os.system(" ".join( finale_command))

	log_text = log_text + f + "\t" + str(char_counter(f, "c")) + "\t" + str(char_counter(cleaned_dir, "c")) + "\n"

log_file = open("cleaning_log", "w").write(log_text)

