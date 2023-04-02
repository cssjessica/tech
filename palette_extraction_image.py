from PIL import Image
Image.open('image.png')

import numpy as np
import matplotlib.pyplot as plt
import matplotlib.image as mpimg

image = mpimg.imread('image.png')
w, h, d = tuple(image.shape)
pixels = np.reshape(image, (w * h,d))

from sklearn.cluster import KMeans
n_colors = 10 # change to more or less colors
model = KMeans(n_clusters = n_colors, random_state = 42).fit(pixels)
palette = np.uint8(model.cluster_centers_)
plt.imshow([palette])
plt.show()
#clcoding.com
