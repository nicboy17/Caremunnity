package com.example.nmajor.caremunnity;

import android.content.Context;
import android.graphics.Bitmap;
import android.media.Image;
import android.widget.ImageView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.ImageRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

public class friend {
    private String name;
    private Bitmap photo;

    public String getName() {
        return name;
    }

    public Bitmap getPhoto() {
        return photo;
    }

    public void setName(String x, String y) {
        name = x + " " + y;
    }

    public void setPhoto(String x, Context context) {
        ImageRequest imageRequest = new ImageRequest(x,
                new Response.Listener<Bitmap>() {
                    @Override
                    public void onResponse(Bitmap response) {
                        photo = response;
                    }
                }, 0, 0, ImageView.ScaleType.CENTER_CROP, null, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                error.printStackTrace();
            }
        });
        Mysingleton.getInstance(context).addToRequestque(imageRequest);
    }

}
