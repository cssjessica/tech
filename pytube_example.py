# download youtube video using python
import pytube
# directory to save the video
download_loc = './'
# enter video url
video_url = input('Enter url: ')
# create an instance of youtube video
video_instance = pytube.Youtube(video_url)
stream = video_instance.streams.get_highest_resolution()
# download the video
stream.download(download_loc)
